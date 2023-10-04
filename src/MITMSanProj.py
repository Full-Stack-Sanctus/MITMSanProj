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
	


def on_message(a, b):
		
		print("on message ....... ")
		
		

def request(flow: http.HTTPFlow) -> None:
	
	
	if flow.request.pretty_url == AdjustBody.U:
		
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
			
				
				