/**
 * Created by PF0BVY6M on 2018/1/29.
 */
export default function ({store, error}) {
  if(sessionStorage.getItem('rgtk')){
    console.log(sessionStorage.getItem('rgtk'),'auth.js的输出');
  }else{
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
