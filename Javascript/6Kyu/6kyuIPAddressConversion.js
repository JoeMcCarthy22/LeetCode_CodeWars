/*
Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

IPv4 to int32
parameter is an ip address - a string of 4 octets
need to return as the 32 bit number
"128.32.10.1" => 2149583361

pseudocode:
-need to split('.') into each octet (in array)
-map? process each octet - to string(2)? in order to get the binary representation
-join() all the octets, forming the IP address
-the IP address must then be converted into the 32bit number use  parseint('ipadress')

*/


function ipToInt32(ip) {
    let octets = ip.split('.');
  
    let binaryOctets = octets.map((octet) => {
        octet = Number(octet)
        let binaryOctet = octet.toString(2)
      
        if (binaryOctet.length == 8){ 
          return binaryOctet;
          } else {
            let difference = (8 - binaryOctet.length);
            let zeros = "0".repeat(difference);
            return zeros.concat(binaryOctet)     
          }                                       
    });
  
    let ipAddress = binaryOctets.join('');
  
    let int32 = parseInt(`${ipAddress}`, 2);
    
    return int32;
  
    

}