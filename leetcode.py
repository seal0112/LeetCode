#!/usr/bin/env python
import requests
import os
import json
import time


class Config:
    """
    some config, such as your github page
    这里需要配置你自己的项目地址
    １．　本地仓库的的路径
    ２．　github中的仓库leetcode解法的路径
    """
    local_path = './'
    # solution of leetcode
    github_leetcode_url =\
        'https://github.com/seal0112/leetcode/tree/master/leetcode-algorithms'
    leetcode_url =\
        'https://leetcode.com/problems/'


class Question:
    """
    this class used to store the inform of every question
    """
    def __init__(self, id_,
                 name, url,
                 lock, difficulty):
        self.id_ = id_
        self.title = name
        # the problem description url
        self.url = url
        self.lock = lock
        self.difficulty = difficulty
        # the solution url
        self.python = ''
        self.javascript = ''

    def __repr__(self):
        return str(self.id_) + ' ' + str(self.title) + ' ' + str(self.url)


class CompleteInform:
    """
    this is statistic inform,
    用每种语言完成了多少题
    """

    def __init__(self):
        self.solved = {
            'python': 0,
            'javascript': 0
        }
        self.complete_num = 0
        self.lock = 0
        self.total = 0

    def __repr__(self):
        return str(self.solved)


class Readme:
    """
    generate folder and markdown file
    update README.md when you finish one problem by some language
    """

    def __init__(self, total, solved, others):
        """
        :param total: total problems nums
        :param solved: solved problem nums
        :param others: 暂时还没用，我想做扩展
        """
        self.total = total
        self.solved = solved
        self.others = others
        self.time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        self.msg = '# Keep thinking, keep alive\n' \
                   'Until {}, I have solved **{}** / **{}** problems. ' \
                   '\n\nCompletion statistic: ' \
                   '\n1. JavaScript: {javascript} ' \
                   '\n2. Python: {python}' \
                   '\n\nNote: :lock: means you need to buy a book from LeetCode\n'.format(
                    self.time, self.solved, self.total, **self.others)

    def create_leetcode_readme(self, table_instance):
        """
        create REAdME.md
        :return:
        """
        file_path = Config.local_path + '/README.md'
        # write some basic inform about leetcode
        with open(file_path, 'w') as f:
            f.write(self.msg)
            f.write('\n----------------\n')

        with open(file_path, 'a') as f:
            f.write('## LeetCode Solution Table\n')
            f.write('| ID | Title | Difficulty | JavaScript | Python |\n')
            f.write('|:---:' * 5 + '|\n')
            table, table_item = table_instance
            for index in table:
                item = table_item[index]
                if item.lock:
                    _lock = ':lock:'
                else:
                    _lock = ''
                data = {
                    'id': item.id_,
                    'title': '[{}]({}) {}'.format(item.title, item.url, _lock),
                    'difficulty': item.difficulty,
                    'js': item.javascript if item.javascript else 'To Do',
                    'python': item.python if item.python else 'To Do',
                }
                line = '|{id}|{title}|{difficulty}|{js}|{python}|\n'.format(**data)
                f.write(line)
            print('README.md was created.....')


class TableInform:
    def __init__(self):
        # raw questions inform
        self.questions = []
        # this is table index
        self.table = []
        # this is the element of question
        self.table_item = {}
        self.locked = 0

    def crawlLeetcodeQuestion(self):
        algorithmsUrl = "https://leetcode.com/api/problems/algorithms/"
        allProblemUrl = "https://leetcode.com/api/problems/all/"

        content = requests.get(allProblemUrl).content
        # problemDict = json.loads(prlblemTitle.text)
        self.questions = json.loads(content)['stat_status_pairs']

        difficultyDict = {
            1: "Easy",
            2: "Medium",
            3: "Hard"
        }

        for i in range(len(self.questions) - 1, -1, -1):
            question = self.questions[i]
            name = question['stat']['question__title'].replace('/', ' ')
            url = question['stat']['question__title_slug']
            id_ = str(question['stat']['frontend_question_id'])
            lock = question['paid_only']
            if lock:
                self.locked += 1
            difficulty = difficultyDict[question['difficulty']['level']]
            url = Config.leetcode_url + url + '/description/'
            q = Question(id_, name, url, lock, difficulty)
            # 这里后面我们会放到类里面，所以不用担心
            # 之所以用一个table和table_item就是因为，我们后期已经用什么语言解决题目的时候要进行索引
            self.table.append(q.id_)
            self.table_item[q.id_] = q
        return self.table, self.table_item

    def __create_folder(self, oj_name):
        oj_algorithms = Config.local_path + '/' + oj_name + '-algorithms'
        if os.path.exists(oj_algorithms):
            print(oj_name, ' algorithms is already exits')
        else:
            print('creating {} algorithms....'.format(oj_name))
            os.mkdir(oj_algorithms)
        for item in self.table_item.values():
            question_folder_name = oj_algorithms + '/' + item.id_ + '. ' + item.title
            if not os.path.exists(question_folder_name):
                print(question_folder_name + ' is not exits, create it now....')
                try:
                    os.mkdir(question_folder_name)
                except Exception as ex:
                    print(ex)

    # 这里都会传入一个‘leetcode'，设置oj名字就是为了方便扩展
    def update_table(self, oj):
        # the complete inform should be update
        complete_info = CompleteInform()
        self.crawlLeetcodeQuestion()
        # the total problem nums
        complete_info.total = len(self.table)
        self.__create_folder(oj)
        oj_algorithms = Config.local_path + '/' + oj + '-algorithms'
        # 查看os.walk看具体返回的是什么东西
        for _, folders, _ in os.walk(oj_algorithms):
            for folder in folders:
                for _, _, files in os.walk(os.path.join(oj_algorithms, folder)):
                    if len(files) != 0:
                        complete_info.complete_num += 1
                    for item in files:
                        question_id = folder.split('.')[0]
                        if item.endswith('.py'):
                            # 这个部分可以写成函数，不过我好像设计有点问题，不太好重构，请读者自己思考
                            complete_info.solved['python'] += 1
                            folder_url = folder.replace(' ', "%20")
                            folder_url = os.path.join(folder_url, item)
                            folder_url = os.path.join(Config.github_leetcode_url, folder_url)
                            self.table_item[question_id].python = '[python]({})'.format(folder_url)
                        elif item.endswith('.js'):
                            complete_info.solved['javascript'] += 1
                            folder_url = folder.replace(' ', "%20")
                            folder_url = os.path.join(folder_url, item)
                            folder_url = os.path.join(Config.github_leetcode_url, folder_url)
                            self.table_item[question_id].javascript = '[JavaScript]({})'.format(folder_url)
        # 这里使用到的Readme这个类就是写文件，相对不是特别重要，没什么好讲的
        readme = Readme(complete_info.total, complete_info.complete_num, complete_info.solved)
        readme.create_leetcode_readme([self.table, self.table_item])
        print('-------the complete inform-------')
        print(complete_info.solved)

    # problemDict["stat_status_pairs"].sort(key=sortLeetcodeQuestion)
    # print("Current solved: **%s/%s**" % (
    #     problemDict["num_solved"], problemDict["num_total"]))
    # print("Note: :lock: means you need to buy a book from LeetCode")

    # # table
    # print("| # | Title | Source Code | Article | Difficulty |")
    # print("|:---:|:---:|:---:|:---:|:---:|")
    # for question in problemDict["stat_status_pairs"]:
    #     lock = question["paid_only"]
    #     level = question["difficulty"]["level"]
    #     print("|%s|[%s](https://leetcode.com/problems/%s)|%s||%s|" % (
    #         question["stat"]["question_id"],
    #         question["stat"]["question__title"],
    #         question["stat"]["question__title_slug"],
    #         ":lock:" if lock else "",
    #         difficultyDict[level])
    #     )

# def sortLeetcodeQuestion(e):
#     return e["stat"]["question_id"]

def main():
    table = TableInform()
    table.update_table('leetcode')


if __name__ == '__main__':
    main()
