/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet" /*

/* 
P: url (string)
R: a string of just the domain name
E: As above
P:
Handle cases at the beginning of the url ('//' and 'www.')
Handle cases for the end of the url (remove anything after the first '.')
Use slicing to achieve desired outcome
*/

function domainName(url){
    let result = '';
    // Handle cases for content preceding the domain
    // handle cases for 'http://www.'
    if (url[10] === '.' && url[4] === ':'){
      result = url.slice(11);
    // handle cases for 'https://www.'
    } else if (url[11] === '.' && url[4] === 's'){
      result = url.slice(12)
    // handle cases for 'http://'  
    } else if (url[0] === 'h' && url[4] === ':'){
      result = url.slice(7);
    // handle cases for 'https://'
    } else if (url[0] === 'h' && url[4] === 's'){
      result = url.slice(8);
    // handle cases for 'www.'
    } else if (url[0] === 'w' && url[1] === 'w'){
      result = url.slice(4);
    } else {
      result = url
    }
      
    
    
    // Handle cases for content succeeding the domain
    // use indexOf('.') to find the first full stop, then slice from its index
    let index = result.indexOf('.');
    result = result.slice(0, index);
    return result
    
  }