interface Emotes {
  [key: string]: string;
}

export const emoticons: Emotes = {
  ":)": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/regular_smile.gif",
  ":o": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/omg_smile.gif",
  ";)": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/wink_smile.gif",
  ":s": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/confused_smile.gif",
  ":'(":
    "http://web.archive.org/web/20140205013226im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/cry_smile.gif",
  "(h)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/shades_smile.gif",
  "(a)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/angel_smile.gif",
  ":-#":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/47_47.gif",
  "8-|":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/49_49.gif",
  ":-*":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/51_51.gif",
  ":^)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/71_71.gif",
  "<:o)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/74_74.gif",
  "|-)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/77_77.gif",
  ":d": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/teeth_smile.gif",
  ":p": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/tongue_smile.gif",
  ":(": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/sad_smile.gif",
  ":|": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/what_smile.gif",
  ":$": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/red_smile.gif",
  ":@": "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/angry_smile.gif",
  "(6)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/angry_smile.gif",
  "8o|":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/48_48.gif",
  "^o)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/50_50.gif",
  "+o(":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/52_52.gif",
  "*-)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/72_72.gif",
  "8-)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/75_75.gif",
  "(y)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/thumbs_up.gif",
  "(n)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/thumbs_down.gif",
  "(l)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/heart.gif",
  "(u)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/broken_heart.gif",
  "(^)":
    "http://web.archive.org/web/20140204231459im_/http://messenger.msn.com/MMM2006-04-19_17.00/Resource/emoticons/cake.gif",
};

export const pattern: RegExp =
  /(:\)|:o|;\)|:s|:'\(|\(h\)|\(a\)|:\-\#|8\-\||:\-\*|:\^\)|<:o\)|\|\-\)|:d|:p|:\(|:\||:\$|:@|\(6\)|8o\||\^o\)|\+o\(|\*\-\)|8\-\)|\(y\)|\(n\)|\(l\)|\(u\)|\(\^\))/g;
