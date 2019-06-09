import requests
import datetime

params = {'username': 'lenhat',
        'password': 'masternhat'}

headers = {'content-type': 'application/json'}

texxt= requests.post('http://polar-hollows-67198.herokuapp.com/api/v1/users', params=params, headers=headers)
print(texxt, texxt.status_code)
