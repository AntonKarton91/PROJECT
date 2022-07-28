class A():
    def __init__(self, name):
        self.name = name

    def funA(self):
        print(self)

a = A('Anton')

a.funA()