ps eax| grep manage.py | grep port=5999|cut -d' ' -f1| sed -e 's/^ *//' | xargs kill
./manage.py runfcgi maxchildren=1 host=127.0.0.1 port=5999
