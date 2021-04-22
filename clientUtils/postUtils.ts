import remark from 'remark'
import strip from 'strip-markdown'

export const getFirstNTextFromMd = async (content:string,n?:number):Promise<string> =>{
    let text = await remark()
        .use(strip)
        .processSync(content).toString()
        
    console.log("TEXT",text)
    // if(n){
    //     return text.substr(0,n)
    // }
    return text
}