function seq(a) {
  return {
    type:'seq',
    toString:function () {
      var re=a.join("");
      if (repeat)
        re=a.length>1?'('+re+')*':re+'*';
      return re;
    }
  };
}
// choice(["[147]","[258]"]) => "[147]|[258]"
function choice(a) {
  var items=[];
  //这一步其实只是为了使生成的正则式更短一些
  //按并联的结合性，"a|(b|c)" 等同于 "a|b|c"
  a.forEach(function (re) {
    if (re.type==='choice')
      items=items.concat(re.items);
    else if (re)
      items.push(re);
  });
  return {
    type:'choice', items:items,
    toString:function () {
      var re=items.join("|");
      if (items.length>1 || repeat) re='('+re+')';
      if (repeat) re+='*';
      return re;
    }
  };
}
// 将一个正则式标志为重复
function repeat(re) {
  if (typeof re==='string') return re+'*';
  re.repeat=true;
  return re;
}
function buildTable(n) {
  var map={},reflect={},i,j,to,path;
  for (i=0;i<n;i++) {
    path=map[i]={};
    for (j=0;j<10;j++) {
      to=(i*10+j) % n;
      path[to]=path[to] || '';
      path[to]+=j;
      if (to>i)
        (reflect[to]=reflect[to] || {})[i]=1;
    }
    for (to in path)
      if (path[to].length>1)
        path[to]='['+path[to]+']';
  }
  for (to in reflect)
    reflect[to]=Object.keys(reflect[to]);
  return {map:map,reflect:reflect};
}

function buildTimesRegx(n) {
  var table=buildTable(n),i=n,j,k,to,path;
  var map=table.map,reflect=table.reflect;
  while (--i) {
    var trans=map[i],t={},
        prefix=trans[i]?repeat(trans[i]):'';
    for (to in trans)
      if (to<i) t[to]=trans[to];

    trans=t;
    if (prefix) for (to in trans)
      trans[to]=seq([prefix,trans[to]]);

    var entrances=reflect[i];
    for (j=entrances.length;j--;) {
      var from=entrances[j];
      path=map[from];
      prefix=path[i];
      for (to in trans)
        path[to]=choice([path[to] || '',seq([prefix,trans[to]])]);
    }
  }
  return '^'+repeat(map[0][0])+'$';
}

export default buildTimesRegx
