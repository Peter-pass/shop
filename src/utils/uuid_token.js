import{v4 as uuidv4} from 'uuid';
export const getUUID =()=>{
    // 要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如果没有生成
    if(!uuid_token){
        // 我生成游客临时身份
        uuid_token=uuidv4();
        // 本地存储一次
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    //切记有返回值，没有返回值undefined
    return uuid_token;
}