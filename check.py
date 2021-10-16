import requests

def check():
    domain = "http://wuuconix.xyz:10002" #域名
    response1 = requests.get(domain).text
    response2 = requests.get(f"{domain}/wuuconix").text
    if ("哈工大微校园" in response1 and "访问禁止 - wuuconix" in response2):
        return True
    else:
        return False

if __name__ == "__main__":
    if check():
        print("check passed")
    else:
        print("check down")
