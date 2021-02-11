import { isString } from "util";

function abbreviateString(str) {
    var split_str = str.split(" ");
    if(split_str.length > 1){
        return (split_str[0] + " " + split_str[split_str.length-1].charAt(0).toUpperCase() + ".");
    }
    return str;
}

export { abbreviateString };
