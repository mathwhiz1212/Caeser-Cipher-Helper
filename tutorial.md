#No downtime DDNS mirroring fun with daplie-tools.



#Set device and give it an intial address.

Run this command and replace devicename with the name you want for your device and replace ipaddress with the initial ip address, this can be 127.0.0.1,::1 or another address as it will be updated later.

```
daplie devices:set --device 'devicename' --addresses 'ipaddress'
```

#Attach device to domain.

Replace devicename with your device's name. Replace example.com with your domain name.

```
daplie devices:attach --device 'devicename' -n 'example.com'
```

#Get the URL for updating the DNS record.


```
daplie devices:token --device 'rpi2'
```

#Bash script

Create a file named ddns.sh

Paste this into it:

```
while :
do

#Replace with the url you get after running the token command.
wget https://oauth3.org/api/com.enom.reseller/ddns?token=askldfjasdlkf556klas

#Every 5 minutes.
sleep 600
done

```

Then run chmod +x ddns.sh

Repeat for every device.
