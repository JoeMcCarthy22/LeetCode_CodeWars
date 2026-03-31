/*
You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
Inputs:
1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2

Outputs
FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar
Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.

parameter is a string
need to return a string
need to remove:

-numbers 
-underscore at the start
-extension at the end

split into an arraty
to remove the numbers at the start, loop forwards,
while arr[i] is a number, i++;
when no longer a number, slice from i + 1 to remove the underscore at the same time

*/

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      
      let i = 0;
      
      //skip the numbers
      while (dirtyFileName[i] >= '0' && dirtyFileName[i] <= '9'){
        i++
      }
      
      //skip the underscore
      i++
      
      //remove the digits and underscore
      let trimmed = dirtyFileName.slice(i);
      
      //remove everything succeeding the last '.' - use lastIndexOf()
      trimmed = trimmed.slice(0, trimmed.lastIndexOf('.'));
      
      return trimmed;
      
    }
}