import re

def replacer(match):
    num = int(match.group().split('px')[0])
    return str(num / 10) + 'rem'

f = open("./style.css")
newf = open("./remstyle.css", 'w')
myreg = re.compile(r'(\d+px)')
for line in f:
    newf.write(re.sub(myreg, replacer, line))

f.close()
newf.close()