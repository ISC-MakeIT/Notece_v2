# manual
## client
- ``cd client``
- ``yarn install`` >> yarn.lockを参照し、依存しているpackageのinstall
- ``yarn start``
※yarn入れてね　npmは使わないように。
## server
- ``cd server``
- ``composer install`` >> vendorのinstall
- ``php artisan key:generate``
- ``php artisan serve`` >> サーバーの起動
※php > composer > laravelの順にinstallしてね
## mysql/docker
- ``docker-compose -v`` dockerの存在を確認する
- ``docker-compose up -d`` docker起動
- ``docker-compose ps``&&``docker ps`` docker起動確認
- ``sh init-mysql.sh`` 何も考えるな
***
# Git
## master
- 作業禁止です。ここで作業しないでね
## branch
- branch名はprefixに``add``等をつけて作業内容を書く >> 例:``fix/menu-design``
## pull
- pushする前に必ず``git pull origin master``でpullすること
