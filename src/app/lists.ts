import { list } from './list';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// export class InMemoryListDbService implements InMemoryDbService {
//     createDb(){
//         let LISTS: list[]=[
//             {
//                 title:'string',
//                 date:'2018/7/12',
//                 comment:'string',
//                 opendetail: false,
//                 favorite:false,
//                 completed:false
//             },
//             {
//                 title:'AAA',
//                 date:'2018/4/4',
//                 comment:'abcdefg',
//                 opendetail: false,
//                 favorite:false,
//                 completed:false
//             }
//         ];
//         return {LISTS};
//     }
// }

export const LISTS: list[]=[
    {
        title:'string',
        date:'2018-07-12',
        comment:'string',
        opendetail: false,
        favorite:false,
        completed:false,
        isedit:false
    },
    {
        title:'AAA',
        date:'2018-04-04',
        comment:'abcdefg',
        opendetail: false,
        favorite:false,
        completed:false,
        isedit:false
    }
]