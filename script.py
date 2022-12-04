import re

def replacerRem(match):
    num = float(match.group().split('rem')[0])
    return str(num * 1.6) + 'rem'

def replacer(match):
    num = int(match.group().split('px')[0])
    return str(num / 10) + 'rem'

f = open("./rstyles.css")
newf = open("./remstyles.css", 'w')
myreg = re.compile(r'(\d+px)')
myregRem = re.compile(r'(\w+rem)')
for line in f:
    newf.write(re.sub(myreg, replacer, line))

f.close()
newf.close()