import time
import sys
import frida
from mitmproxy import http



class AdjustBody:
	
	
    
	
	X = False
	
	U = "" 
	

class Input:
	
	
	
	if ((len(sys.argv) < 2) or (len(sys.argv) > 2)):
		
		url = input('Please input just one request URL: ')
		print(url) 
		AdjustBody.U = url
		

	else:
		
		AdjustBody.U = sys.argv[1]
	


def on_message(message, data):
     try:
         if message:
             if message['type'] == 'send':
                 payload = message['payload']
                                      
                 method = payload['method']
                                      
                 args = payload['args']
                 details = payload['details']
                 
                 seckeys = payload['seckeys']
                 ivkeys = payload['ivkeys']
                                                               
                 
                 # print('[ ] {0}'.format(message['payload']))
                 print('[+] Method: {0}'.format(method))
                 print('[ ] Arguments:')

                 for item in args:
                     print('[ ]   {0}: {1}'.format(item['name'], item['value']))
                     
                 print('')   
                 print('[ ] Additional Details:')
                              
                 
                 for item in details:
                     print('[ ]   {0}: {1}'.format(item['name'], item['value']))
                    
                 print('')
                 print('')                               
                 print('[] Secret Keys:')
                 
                 
                 
                 
                 
                 for item in seckeys:
                     print('[ ]   {0}: {1}'.format(item['name'], item['value']))
                     
                 print('')                    
                 print('[] IV Keys')
                 
                 for item in ivkeys:
                     print('[ ]   {0}: {1}'.format(item['name'], item['value']))
                 print('')



     except Exception as e:
         print('exception: ' + e) 
		


def response(flow: http.HTTPFlow) -> None:
	
	
	if flow.response == AdjustBody.U:
		
		AdjustBody.X = True
		while AdjustBody.X > 0:
			
			app = "OPay"
			device = frida.get_usb_device()
			session = device.attach(app)
			time.sleep(1)
			
			with open("aes.js") as f:
				script = session.create_script(f.read())
			
			script.on("message", on_message)
			script.load()
			sys.stdin.read()
			AdjustBody.X = False
			
	else:
		return
		
		