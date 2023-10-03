import time
import sys
import frida
from mitmproxy import http



class AdjustBody:
	
	
    
	
	X = False


def on_message(a, b):
		
		print("on message ....... ")
		
		

def request(flow: http.HTTPFlow) -> None:
	
	if ((len(sys.argv) < 2) or (len(sys.argv) > 2)):
		
		url = input('Please input just one request URL: ')
	
	else:
		
		url = sys.argv[1]
	
	if flow.request.pretty_url == url:
		
		AdjustBody.X = True
		while AdjustBody.X > 0:
			
			app = "OPay"
			device = frida.get_usb_device()
			session = device.attach(app)
			time.sleep(1)
			
			with open("aes-hook.js") as f:
				script = session.create_script(f.read())
			
			script.on("message", on_message)
			script.load()
			sys.stdin.read()
			AdjustBody.X = False
			
	else:
		return 
			
				
				
				
				
				
				
			
			
	
	
	
	
		
		
			
			
				
				
				
				
				
				
					
					
				
			
