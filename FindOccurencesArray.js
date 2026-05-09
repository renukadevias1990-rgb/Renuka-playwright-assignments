function arrayoccurences(){
        let num = [2,4,5,2,1,2];
        let count =0;
        for(i=0;i<num.length;i++){
            if(num[i]===2){
                count++;
            }
        }
        return count;
      }console.log("count of 2",arrayoccurences());