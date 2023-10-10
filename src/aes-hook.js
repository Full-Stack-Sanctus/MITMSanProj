'use strict;'



console.log("Script loaded successfully ..... ");

function bytesToString(arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
}

function bytesToHex(arr) {
    var str = '';
    var k, j;
    for (var i = 0; i < arr.length; i++) {
        k = arr[i];
        j = k;
        if (k < 0) {
            j = k + 256;
        }
        if (j < 16) {
            str += "0";
        }
        str += j.toString(16);
    }
    return str;
}

var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    base64DecodeChars = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));

function bytesToBase64(e) {
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e[a++],
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}





if (Java.available) {
  Java.perform(function() {
  	
  	
  	
  	var seckeysbytesToString;
      var seckeysbytesToBase64;
      var seckeysbytesToHex;
      
      
      var ivkeysbytesToString;
      var ivkeysbytesToBase64;
      var ivkeysbytesToHex;
      
      
  	      
  	var secretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec');
  	secretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
  	 	
          
          
          var result = this.$init(a, b);
          
          seckeysbytesToString = bytesToString(a);
          seckeysbytesToBase64 = bytesToBase64(a);
          seckeysbytesToHex = bytesToHex(a);
          
              	
      	return result;
      	   
       
        } 
  	
  	
      
	
      const ivParameterSpec = Java.use('javax.crypto.spec.IvParameterSpec');
      ivParameterSpec.$init.overload('[B').implementation = function (a) {
      	var result = this.$init(a);
      
      
          ivkeysbytesToString = bytesToString(a);
          ivkeysbytesToBase64 = bytesToBase64(a);
          ivkeysbytesToHex = bytesToHex(a);
      
      
          return result;
      } 
    
    
    
      //Cipher stuff
      
      const Cipher = Java.use('javax.crypto.Cipher');
      Cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (opmode, secretkey, iv) {
      	
      	
      
      	var args = [];
  
  	    var details = [];
  
          var seckeys = [];
          
          var ivkeys = [];
          
      	
      	var opmodeString = this.getOpmodeString(opmode);
      
    	  var algo = this.getAlgorithm();  
    
    	  args.push({'name': 'opmode', 'value': opmodeString});
    	  args.push({'name': 'secretkeyClassName', 'value': secretkey.$className});  	
    	  args.push({'name': 'IVclassName', 'value': iv.$className});
    	    	  
    	
    	  details.push({'name': 'cipher', 'value': algo});
    
    
          seckeys.push({'name': 'seckeysbytesToString', 'value': seckeysbytesToString});
          seckeys.push({'name': 'seckeysbytesToBase64', 'value': seckeysbytesToBase64});
          seckeys.push({'name': 'seckeysbytesToHex', 'value': seckeysbytesToHex});
          
          ivkeys.push({'name': 'ivkeysbytesToString', 'value': ivkeysbytesToString});
          ivkeys.push({'name': 'ivkeysbytesToBase64', 'value': ivkeysbytesToBase64});
          ivkeys.push({'name': 'ivkeysbytesToHex', 'value': ivkeysbytesToHex});
    
            
    
          var send_message = {
          	'method': 'javax.crypto.Cipher.init',
              'args': args,
              'details': details,
              
              'seckeys': seckeys,
              'ivkeys': ivkeys, 
              
            
           };    
          send(send_message);
    
         
    
    
      	// call original init method
          this.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec').call(this, opmode, secretkey, iv);
          
      }  
      
      
      
      	                
  }
)}
    	

     