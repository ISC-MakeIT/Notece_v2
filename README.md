# manual
## client
- ``cd client``
- ``make`` 幸せになるコマンド
※ makeコマンド使えない場合は調べて入れてね
## server
- ``sh scripts/create-env.sh``
- ``cd server``
- ``make``
## mysql/docker
- ``docker-compose -v`` dockerの存在を確認する
- ``docker-compose up -d`` docker起動
- ``docker-compose ps``&&``docker ps`` docker起動確認
- ``sh scripts/mysql.sh`` 何も考えるな bashが開く
- ``mysql -u root -p`` パスワードを要求されるのでパスワードを入れると幸せになる
***
# Git
## master
- 作業禁止です。ここで作業しないでね
## branch
- branch名はprefixに``add``等をつけて作業内容を書く >> 例:``fix/menu-design``
## pull
- pushする前に必ず``git pull origin master``でpullすること
