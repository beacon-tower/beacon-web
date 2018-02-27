/**
 * Created by PF0BVY6M on 2018/1/29.
 */

export default function ({store, error}) {
  if(true){//  if(sessionStorage.getItem('rgtk')){http://localhost:3000/personCenter
   // console.log(window.sessionStorage.getItem('rgtk'),'auth.js的输出');
  }else{
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
