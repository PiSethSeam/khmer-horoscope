import React, { useState } from 'react'
import w1 from "../assets/images/woman/1.jpg"
import w2 from "../assets/images/woman/2.jpg"
import w3 from "../assets/images/woman/3.jpg"
import w4 from "../assets/images/woman/4.jpg"
import w5 from "../assets/images/woman/5.jpg"
import w6 from "../assets/images/woman/6.jpg"
import w7 from "../assets/images/woman/7.jpg"
import w8 from "../assets/images/woman/8.jpg"
import w9 from "../assets/images/woman/9.jpg"
import w10 from "../assets/images/woman/10.jpg"
import w11 from "../assets/images/woman/11.jpg"
import w12 from "../assets/images/woman/12.jpg"
import w13 from "../assets/images/woman/13.jpg"
import w14 from "../assets/images/woman/14.jpg"
import w15 from "../assets/images/woman/15.jpg"
import w16 from "../assets/images/woman/16.jpg"
import w17 from "../assets/images/woman/17.jpg"
import m1 from "../assets/images/man/1.jpg"
import m2 from "../assets/images/man/2.jpg"
import m3 from "../assets/images/man/3.jpg"
import m4 from "../assets/images/man/4.jpg"
import m5 from "../assets/images/man/5.jpg"
import m6 from "../assets/images/man/6.jpg"
import m7 from "../assets/images/man/7.jpg"
import m8 from "../assets/images/man/8.jpg"
import m9 from "../assets/images/man/9.jpg"
import m10 from "../assets/images/man/10.jpg"
import m11 from "../assets/images/man/11.jpg"
import m12 from "../assets/images/man/12.jpg"
import m13 from "../assets/images/man/13.jpg"
import m14 from "../assets/images/man/14.jpg"
import m15 from "../assets/images/man/15.jpg"
import m16 from "../assets/images/man/16.jpg"
import m17 from "../assets/images/man/17.jpg"
import heartbgimg from "../assets/images/heartbgimg.png"

const wArr = [
  w1, w2, w3, w4, w5,
  w6, w7, w8, w9, w10,
  w11, w12, w13, w14, w15,
  w16, w17
]
const mArr = [
  m1, m2, m3, m4, m5,
  m6, m7, m8, m9, m10,
  m11, m12, m13, m14, m15,
  m16, m17
]

const khHoroscopeArr = [
  {
    header: 'មនុស្សកើតឆ្នាំជូត (កណ្តុរ)',
    subHeader: '(ឆ្នាំជូត "ធាតុទឹក" ពង្សទេវតាប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ច្រើនមានចិត្តក្លាហានមោះមុត ហ៊ានសម្រេចកិច្ចការអ្វីៗបានដោយខ្លួនឯង មិនចាំបាច់ពឹងពាក់អ្នកដទៃ តែបើធ្វើគុណនឹងគេ ច្រើនបានទោសមកវិញ ពាក្យសម្តីចរចាច្រើនពិរោះគាប់ចិត្តអ្នកផង ចំណេះដឹងគួរសមអាចប្រើការបាន បើធ្វើដំណើរទៅណាមកណា មានមិត្តភ័ក្តិចោមរោមកុះករ បើធ្វើការងាររាជការ នឹងបានបុណ្យសក្តិធំ នឹងមានមន្ត្រីស្រឡាញ់រាប់អានច្រើន។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សនិយាយស្តីដាច់ខាត មិនសូវញញឹមញញែម ធ្វើអ្វីរមែងតាមតែចិត្តខ្លួនឯងជាធំ ស្តាប់ហេតុផងអ្នកដទៃម្តងម្កាល ការនិយាយស្តី សូម្បីគ្រាខ្លះចចេសរឹងរូសក៏ជាទីត្រូវចិត្តត្រូវថ្លើមរបស់លោកអ្នកធំ និងសមណព្រហ្មណ៍ មានបញ្ហាខូចបង់ខុសភ្លាត់ច្រើនក៏ព្រោះការធ្វើអ្វីតាមតែចិត្តខ្លួនឯង កាលណាវ័យឡើងច្រើននិស្ស័យនេះនឹងថយចុះ។ ជាមនុស្សមាននិស្ស័យពេញចិត្តក្នុងរឿងស្នេហា មានមានៈ មានការអត់ធ្មត់ ព្យាយាមក្នុងការសិក្សារៀនសូត្រ និងតស៊ូក្នុងកិច្ចការដែលខ្លួនធ្វើ និងជាមនុស្សអភ័ព្វពឹងញាតិបងប្អូនមិនបាន បើពឹងពុំនាក់អាស្រ័យអ្នកដទៃប្រសើរជាង។ ជាអ្នកមានបុណ្យកុសល ចូលចិត្តជួយដោះទុក្ខអ្នកមានអាសន្ន មានសមត្ថភាព ក្នុងការរកប្រាក់ប៉ុន្តែច្រើនមានក្តីក្រហាយដោយមនុស្សភេទផ្ទុយ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ក្នុង​ឆ្នាំ ឆ្លូវ ច​ និង វក។ មិន​គួរ​រៀប​ការ​ជាមួយ​​ស្រី ដែល​កើត​ឆ្នាំ ម្សាញ់ និង រកា ព្រោះ​ជា​គូ​ដែល​អាក្រក់​បំផុត។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ច កុរ ឆ្លូវ។ មិន​គួរ​រៀប​ការ​ជាមួយ​មនុស្ស​ប្រុស​ដែល​កើត​ឆ្នាំ ម្សាញ់ និង មមី ព្រោះ​ជា​គូ​ដែល​អាក្រក់​បំផុត។​​'
    ]
  },
  {
    header: 'មនុស្សកើតឆ្នាំឆ្លូវ (គោ)',
    subHeader: '(ឆ្នាំឆ្លូវ "ធាតុដី" ពង្សមនុស្សប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា មានគេស្រឡាញ់រាប់អានច្រើន តែច្រើន អភ័ព្វគូគ្រង ចិត្តច្រើនរវើរវាយ បើរកស៊ីជំនួញជួញដូរ នឹងបានផលមធ្យម បើធ្វើកិច្ចការរដ្ឋច្រើនបាន បុណ្យស័ក្តិតូចល្មម ជាមនុស្សចូលចិត្តស្នេហា និងចូលចិត្តដើរលេងច្រើន។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមានគំនិតប្រាជ្ញាវៀងវៃសំដីនិយាយមោះមុត មានគេគោរព កោតក្រែងច្រើន ជាមនុស្សមានចិត្តបុណ្យកុសល ចូលចិត្តជួយដោះទុក្ខអ្នកមានអាសន្ន មាននិស្ស័យ សុភាពទន់ភ្លន់ តែមិនសូវអើពើនិងញាតិសន្តាន ឆ្លាតខាងនិយាយកំប្លែង ឆេវឆាវ ឆាប់ខឹងតែឆាប់បាត់ រញាំរញី ពេញចិត្តក្នុងកាមារម្មណ៍ច្រើន បងប្អូនញាតិមិត្តពឹងពាក់ពុំសូវបាន។ កាលពីនៅក្មងលំបាក វេទនាច្រើន តែងនិរាសចាកចោលស្រុកកំណើត និង ឳពុកម្ដាយទៅនៅទីឆ្ងាយ លុះដល់វ័យចាស់ទៅ ទើបមានបានសម្បូណ៌ហូរហៀរទៅដោយភោគទ្រព្យ និងខ្ញុំកំដរបរិវារ។ មុខរបរដែលស័ក្តិសមជាងគេសម្រាប់មនុស្សកើតឆ្នាំឆ្លូវនេះគឺ ៖ ពេទ្យ មេធាវី ឬ ការងាររដ្ឋការ ដែលទាក់ទងទៅនឹងផ្នែករដ្ឋបាល បើធ្វើស្រែចំការ ការងារដែលយកកម្លាំងកាយ ទៅប្តូរច្រើនតែពុំសូវ បានផលល្អ បើសេពគប់សមណៈ និង មានកិត្តិសព្ទល្អ ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​ស្ត្រី​ដែល​កើត​ឆ្នាំ ជូត ម្សាញ់ និង រកា។ មិន​គួរ​រៀប​ការ​នឹង​ស្រ្តី​ដែល​កើត​ឆ្នាំ ខាល រោង និង មមី។',
      'គួរ​រៀប​ការ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ជូត ថោះ និង រកា។ មិន​គួរ​រៀប​ការ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ​ ម្សាញ់ មមី និង មមែ។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំខាល (ខ្លា)',
    subHeader: '(ឆ្នាំខាល "ធាតុឈើ" ពង្សយក្សស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សចិត្តមានៈបន្តិច ហើយកាចតែច្រើនមានអំណាច គេកោតខ្លាចច្រើន អ្នកនោះជាមនុស្សមានសំណាង មានខ្ញុំកំដរច្រើន បើរកស៊ីជួញដូរច្រើនបានលាភធំ បើធ្វើការរដ្ឋការនឹងបានល្អប្រសើរ ជាមនុស្សមានចិត្តអង់អាចតែឆាប់ខឹងបន្តិច ដល់ចាស់ជរាទៅមានលាភច្រើន។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យអង់អាច ក្លាហានស្វាហាប់ដូចសត្វខ្លា រិទ្ធិឫក្សពារសុភាពរាបសារ និយាយស្តីតិច ចូលចិត្តធម្មជាតិនិងតូរ្យតន្ត្រី។ ជាមនុស្សចូលចិត្តនិងកាមារម្មណ៍មិនចេះឆ្អែតឆ្អន់ ពាក្យសម្តីច្រើនគម្រោះគម្រើយ ចូលចិត្តនិយាយកំប្លែង ចំអកឡកឡើយឲ្យអ្នកដទៃ។ ច្រើនជឿគេងាយ មាត់រឹងនិយាយមិនព្រមចាញ់នរណា ឆាប់ខឹងតែឆាប់បាត់ ចិត្តល្អ មានមិត្តភ័ក្តិច្រើនប៉ុន្តែមិត្តទាំងនោះច្រើនតែនាំរឿងក្តៅក្រហាយមកឲ្យ ធ្វើគុណមិនកប។ ជាមនុស្សមានបុណ្យវាសនាខ្ពស់ មានរាសីក្នុងខ្លួន សត្រូវប៉ុនប៉ងព្យាបាទមិនបាន ទៅនៅកន្លែងណា អ្នកផងទាំងឡាយតែស្រឡាញ់រាប់អាន។ មុខរបរដែលស័ក្តិសមបំផុត សម្រាប់មនុស្សនេះគឺ៖ ធ្វើគ្រូបាធ្យាយ ធ្វើពេទ្យ ឬ ធ្វើការរដ្ឋការក្នុងក្រសួងហិរញ្ញវត្ថុ ពីព្រោះជាមនុស្សឆ្លាតឈ្លាសវៃប៉ិនប្រសប់ក្នុងការរកប្រាក់កាស។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ រោង ច និង រកា។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្រី​ដែល​កើត​ឆ្នាំ​ ថោះ និង មមែ។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ម្សាញ់ និង​ រកា។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ប្រុស​ដែល​កើត​ឆ្នាំ​ ឆ្លូវ និង ថោះ។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំថោះ (ទន្សាយ)',
    subHeader: '(ឆ្នាំថោះ "ធាតុឈើ" ពង្សមនុស្សស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សច្រើនអភ័ព្វឈឺច្រើន ចូលចិត្តនិយាយពាក្យមិនបានការ ចូលចិត្តផ្គាប់ផ្គុនគេ បើធ្វើការរាជការនឹងបានជាធំ រកស៊ីជួញដូរមិនសូវបាន អ្នកជិតខាងច្រើនស្រឡាញ់រាប់អាន តែដើរឆ្ងាយមិនសូវបាន បើរកស៊ីជួញដូរជិតច្រើនបានផលជាងឆ្ងាយ។ ជាមនុស្សមិនសូវចូលចិត្តកាមតណ្ហា។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យនិយាយស្តីច្រើនទទឹងទទែង ពុំសូវសុភាពរាបសារប៉ុន្តែមានចិត្តស្មោះត្រង់កត្តញ្ញូ ស្គាល់បុណ្យស្គាល់បាប។ ជាមនុស្សចូលចិត្តសិក្សារកការចេះដឹងដាក់ខ្លួន ឆ្លាតឈ្លាសវៃស្គាល់កលល្បិចមនុស្សមានតណ្ហាខ្លាំងដូចទឹកពុះ។ ប្រាថ្នាទៅលើអ្វីហើយ រមែងខិតខំព្យាយាមធ្វើទាល់តែបានសម្រេច។ ចិត្តស្រាលឆាប់ខឹងតែឆាប់បាត់ ធ្វើគុណមិនបានផល ត្រូវញាតិមិត្តបៀតបៀនច្រើននៅគាល់បំរើ ឬ ចៅហ្វាយនាយមិត្តភ័ក្តិ។ មុខរបរដែលសាកសមជាងគេ សម្រាប់មនុស្សឆ្នាំនេះគឺធ្វើគ្រូបាធ្យាយ មេធារី សុភាចារបុរស អ្នកឃោសនា ពីព្រោះជាមនុស្សប៉ិនប្រសព្វក្នុងការនិយាយស្តី និង ចូលចិត្តវែកញ៉ែករកហេតុផលឲ្យអ្នកដទៃ។ បើឲ្យធ្វើការរកស៊ីដោយកម្លាំងកាយទៅប្តូរច្រើនតែពុំសូវបានសមប្រកប។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​នារី​ដែល​កើត​ឆ្នាំ ឆ្លូវ ម្សាញ់ មមី និង មមែ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ក្នុង​ឆ្នាំ ខាល។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ក្នុង​ឆ្នាំ ច កុរ និង មមែ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង បុរស​ដែល​កើត​ឆ្នាំ ខាល រកា និង មមី។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំរោង (នាគ)',
    subHeader: '(ឆ្នាំរោង "ធាតុមាស" ពង្សទេព្តាប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សមានឫទ្ធិ៍ចេស្តាខ្ពស់ ជាមនុស្សមានរាសី មានវោហារច្រើន អ្នកផងស្រឡាញ់រាប់អាន ជាមនុស្សឆាប់ខឹងតែចាប់បាត់ បើរកស៊ីជួញដូរមិនសូវបាន បើធ្វើការរាជការច្រើនបានបុណ្យស័ក្តិធំ ចូលចិត្តដើរឆ្ងាយ លុះចាស់ជរាច្រើនមានលាភចូល។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យនិងជោគសំណាងល្អ និងមានសេចក្តីសុខកាយសប្បាយចិត្ត ចៅហ្វាយនាយចិញ្ចឹមបីបាច់រក្សា នឹងទៅបានជាអ្នកមានបុណ្យស័ក្តិ រហូតមានកិត្តិយសកិត្តិនាមល្បីល្បាញ ។ ជាមនុស្សមានចិត្តបុណ្យសុន្ទរ៍ទាន ចូលចិត្តជួយអ្នកដទៃ ។ អាចតាំងខ្លួនឲ្យបានធំដុំបានដោយខ្លួនឯង យូរៗទៅទើបមានលាភធំម្តង ជាមនុស្សមានព្រះកេតុថែរក្សា អរិសត្រូវមិនអាចប៉ុនប៉ងពាធាបានឡើយ ។ ជាមនុស្សមានវាចាមោះមុត សតិបញ្ញាឈ្លាសវៃ ចិត្តស្រាលឆាប់ខឹងតែឆាប់បាត់ ពេញចិត្តនឹងរសកាមារម្មណ៍ មិនចេះនឿយណាយ ។ មនុស្សនេះ ច្រើនតែទទួលជោគលាភពីមនុស្សភេទផ្ទុយ បើធ្វើការជាមួយមនុស្សភេទផ្ទុយគ្នាហើយតែងតែទទួលផលបានល្អជាវិសេស ។ មុខរបរដែលសាកសមបំផុតគឺ៖ ទទួលយកអាសា គឺថាការណា គេធ្វើមិនកើតហើយ ឲ្យមនុស្សនេះទទួលធ្វើរមែងតែងតែទទួលបានលទ្ធផលល្អជាវិសេស កាលបើដល់វ័យជរា នឹងបានទៅជាអ្នកមានស្តុកស្តម្ភ ។ ',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​នារី​ដែល​កើត​ឆ្នាំ ជូត មមែ ច និង វក។ មិន​គួរ​រៀបការ​ជាមួយ​នឹង​នារី​ដែល​កើត​ឆ្នាំ​ ខាល។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ក្នុង​ឆ្នាំ ជូត ម្សាញ់ និង វក។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​​បុរស​ដែល​កើត​ឆ្នាំ​ ឆ្លូវ ច និង កុរ។​'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំម្សាញ់ (ពស់)',
    subHeader: '(ឆ្នាំម្សាញ់ "ធាតុឈើ" ពង្សមនុស្សប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សធុនកណ្តាល មិនល្អពេក មិនអាក្រក់ពេក កុំធ្វើគុណដល់គេ ព្រោះច្រើនបានទុក្ខទោសដល់ខ្លួន បើរកស៊ីជួញដូរល្អគួរសម ធ្វើការរាជការមិនសូវល្អ ចូលចិត្តដើរច្រើន ទ្រព្យសម្បត្តិមានមធ្យម តែចិត្តច្រើនកំណាញ់បន្តិច ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យចូលចិត្តសិក្សា យកចំណេះដឹងមកដាក់ខ្លួន យកចិត្តទុកដាក់នឹងព្រឹត្តិការណ៍ទូទៅ មិនថានៅជិតឬនៅឆ្ងាយ ។ មានបុណ្យវាសនាខ្ពង់ខ្ពស់ មានអំណាចឥទ្ធិពល ជាទីគោរពរាប់អាននៃជនទូទៅ ជាមនុស្សចូលចិត្តដើរ ឬ ផ្លាស់ប្តូរទីលំនៅច្រើន ចូលចិត្តខាងភាពខ្ពង់ខ្ពស់ ធ្វើការនៅក្នុងទីណាៗ រមែងមិនសប្បាយរីករាយចិត្ត ចូលចិត្តរស់នៅតាមទីជនបទ ។ មុខរបរ ឬ ការងារ ដែលសាកសមនឹងខ្សែរជីវិត របស់មនុស្សកើតឆ្នាំនេះ ឲ្យចម្រើនរុងរឿងលូតលាស់ត្រូវនឹងសម្លោករបស់ខ្លួននោះគឺធ្វើជំនួញជួញប្រែ នឹងបានទៅជាអ្នកមានទ្រព្យសម្បតិ្តស្កុកស្តម្ភ ។ បើធ្វើរាជការមិនសូវល្អប៉ុន្មានទេ ច្រើនតែទទួលទោសទណ្ឌ ឬ ត្រូវទទួលការឥស្សាច្រណែនឈ្នានីស ពុំសូវមានសេចក្តីសុខចម្រើនក្នុងជីវិតឡើយ ពុំនោះទេជាអ្នកប្រកបដោយរោគច្រើន ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ក្នុង​ឆ្នាំ ខាល​ រោង និង ម្សាញ់។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​​ស្ត្រី​កើត​ឆ្នាំ ជូត និង ច។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ក្នុង​ឆ្នាំ ឆ្លូវ ថោះ និង រោង។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ជូត និង មមែ។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំមមី (សេះ)',
    subHeader: '(ឆ្នាំមមី "ធាតុភ្លើង" ពង្សទេព្តាស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សមានរាសីមធ្យម អ្នកផងស្រឡាញ់រាប់អានច្រើនបានលាភជារឿយៗ បើធ្វើការរាជការនឹងជាអ្នកធំទំនុកបំរុងល្អណាស់ បើធ្វើដំណើរដើរឆ្ងាយមិនសូវល្អ ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមានឫកពារក្រអឺតក្រទម តែមានសន្តានចិត្តល្អ ជាទីពឹងពាក់ពុំនាក់អាស្រ័យនៃញាតិមិត្តបាន ។ ពាក្យសម្តីនិយាយច្រើនគ្រោតគ្រាតមិនសូវទន់ភ្លន់ ។ សត្រូវច្រើនកើតបានដោយសារតែសម្តីរបស់ខ្លួន ។ ជាមនុស្សមានវាសនាខ្ពស់ មិនអាចមានអ្នកណាប៉ុនប៉ងពាធាបានឡើយ ។ កាលពីតូចច្រើនលំបាកវេទនា តែចូលដល់វ័យចាស់នឹងក្លាយទៅជាអ្នកមានស្តុកស្តម្ភ ពីព្រោះជាមនុស្សមានសតិបញ្ញាឈ្លាសវៃ ប៉ិនប្រសព្វក្នុងការរកស៊ី យល់នៅជម្រៅគ្រប់ល្បិចកលរបស់មនុស្ស ។ ចូលចិត្តភ្លេងភ្លាត់នឹងល្បែងផ្សេងៗ បើផ្លាស់ទីលំនៅទៅទីដទៃ ល្អប្រសើរជាងនៅក្នុងទីកន្លែងកំណើត ៕ មុខរបរដែលសាកសម សំរាប់មនុស្សកើតឆ្នាំនេះគឺ៖ ពេទ្យ គ្រូហ្ម អ្នកវិទ្យាសាស្ត្រ មេធាវី និងជាអ្នកជំនួញប្រែ ។ បើធ្វើការយកកម្លាំងកាយទៅប្តូរ ដូចជាធ្វើស្រែចំការច្បារដំណាំ នឹងបានផលជាមធ្យម ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ វក​។ មិន​គួរ​រៀបការ​ជាមួយ​នឹង​ស្ត្រី​ឆ្នាំ​ ជូត ថោះ។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ថោះ និង វក។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ​ ឆ្លូវ ខាល កុរ។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំមមែ (ពពែ)',
    subHeader: '(ឆ្នាំមមែ "ធាតុមាស" ពង្សទេព្តាស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សធន់កណ្តាល មានទីលំនៅពុំសូវជាប់លាប់ សេពគប់មិត្តភ័ក្តិមិនសូវសមប្រកប ធ្វើការរាជការមិនសូវល្អ បើរកស៊ីជួញដូរដោយប្រាជ្ញាច្រើនល្អប្រសើរ អ្នកផងស្រឡាញ់ចូលចិត្ត ។ មនុស្សកើតឆ្នាំនេះ ជាមនុស្សមានវាសនាខ្ពស់ ជាទីត្រូវចិត្តនៃមនុស្សទូទៅ ពេលជួបទុក្ខអាសន្នមានអ្នកធំជួយគាំពារ ។ ឫកពារសុភាពរាបសារ សម្តីទន់ផ្អែមពិរោះ មានមិត្តច្រើនមិនថានៅទីណាៗ ប៉ុន្តែមិត្តច្រើននាំទុក្ខមកឲ្យខ្លួន ធ្វើគុណមិនបានផល មិនចេះចងគំនុំគុំគួននឹងអ្នកណាឡើយ ។ ចិត្តឆេវឆាវ ឆាប់ខឹងតែឆាប់បាត់ មានតណ្ហាខ្លាំងស្រើបស្រាលនឹងរសកាមារម្មណ៍ ប្រៀបដូចភ្លើងចំបើង មានស្នេហាក្នុងខ្លួនជាទីសត្រូវភ្នែកនៃមនុស្សផ្ទុយភេទ ។ ជាមនុស្សនិយាយតិចតែគិតច្រើន មុននឹងលូកដៃទៅចាប់កាន់ការងារអ្វីនីមួយៗ ប្រើគំនិតគិតល្អិតល្អន់ ។ មុខរបរដែលសាកសមជាងគេ សម្រាប់មនុស្សកើតឆ្នាំនេះគឺការលក់ដូរ ធ្វើជំនួញជួញប្រែនឹងបានទៅជាអ្នកមានស្តុកស្តម្ភ ពីព្រោះជាមនុស្សមានការពិចារណាល្អិតល្អន់ ។ បើធ្វើការងាររដ្ឋល្អជាមធ្យម នឹងតាំងខ្លួនទៅជាអ្នកមានបានទៅពេលឈានដល់វ័យចាស់ ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ​ ថោះ និង វក។ មិន​គួរ​រៀបការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ក្នុង​ឆ្នាំ ម្សាញ់ ឆ្លូវ មមែ និង កុរ។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ថោះ កុរ និង រោង។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ខាល មមែ និង ច។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំវក (ស្វា)',
    subHeader: '(ឆ្នាំវក "ធាតុដែក" ពង្សយក្សប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សចិត្តស្រាលឆាប់ខឹងតែឆាប់បាត់ ធ្វើការច្រើនខ្ជីខ្ជា មិនសូវចូលចិត្តសេពគប់មិត្តភ័ក្តិ បើរកស៊ីជួញដូរល្អគួរសម បើធ្វើការរដ្ឋនឹងបានល្អប្រសើរ ច្រើនតែមានគេច្រណែនឈ្នានីស ប្រយ័ត្នអ្នកជិតខាងនាំទុក្ខទោសដល់ខ្លួន ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យរពឹស នៅមិនស្ងៀមទទីសទទាស់ រហូតសម្តីនិយាយញាប់ស្មេរមិនសូវពិរោះពិសារ ។ ចូលចិត្តសិក្សារកចំណេះដឹងមកដាក់ក្នុងខ្លួន យកចិត្តទុកដាក់នឹងព្រឹត្តិការណ៍ទូទៅ មិនថានៅទីជិតឬទីឆ្ងាយ ។ មានបុណ្យវាសនាខ្ពង់ខ្ពស់ មានអំណាចឥទ្ធិពល ជាទីគោរពរាប់អាននៃញាតិមិត្ត ។ ជាមនុស្សដែលមានចិត្តទៅរកផ្លូវកាមារម្មណ៍ច្រើន គូស្រករដែលអាចយកអ្នកនេះបានទាល់តែបំពេញនូវសេចក្តីត្រូវការនេះឲ្យបានពេញចិត្ត បើពុំដូច្នេះទេអាចនឹងមានការផិតក្បត់ ឬ អាចឈានទៅដល់រកការលែងលះគ្នា ។ មុខរបរឬការងារ ដែលសាកសមនឹងខ្សែជីវិតរបស់មនុស្សកើតឆ្នាំនេះ ឲ្យបានចម្រើនរុងរឿងលូតលាស់ត្រូវនឹងសម្លោករបស់ខ្លួននោះគឺ៖ ធ្វើជំនួញជួញប្រែ នឹងបានទៅជាអ្នកមានទ្រព្យសម្បត្តិស្តុកស្តម្ភ ។ បើធ្វើការងាររាជការពុំសូវជាល្អប៉ុន្មានទេ ច្រើនតែទទួលទោសទណ្ឌ ឬ ត្រូវទទួលការឥស្សាច្រណែនឈ្នានីស ពុំសូវមានសេចក្តីសុខចម្រើនក្នុងជិវិតឡើយ ពុំនោះទេជាអ្នកប្រកបដោយរោគច្រើន ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​នារី​ដែល​ឆ្នាំ​ មមី និង រោង។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​នារី​ដែល​កើត​ឆ្នាំ រកា វក និង កុរ។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ជូត រោង និង មមី។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ វក និង រកា។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំ រកា (មាន់)',
    subHeader: '(ឆ្នាំរកា "ធាតុដែក" ពង្សយក្សប្រុស)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សចិត្តស្រាលឆាប់ខឹង តែមិនចេះមានគំនុំ ច្រើនមានចិត្តក្លាហានមោះមុត ហ៊ានសម្រេចកិច្ចការអ្វីៗបានដោយមិនចាំបាច់ពឹងពាក់អ្នកដទៃ ពីតូចអភ័ព្វញាតិ លុះក្រោយមកនឹងបានជួបជុំវិញ តែប្រយ័ត្នក្នុងការសេពគប់មិត្ត ព្រោះច្រើននាំទុក្ខទោសដល់ខ្លួន ធ្វើគុណលើអ្នកដទៃ ច្រើនបានទោសមកវិញ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សស្រឡាញ់ស្អាត មានរបៀបរៀបរយ វាចានិយាយស្តីសុភាពរាបសារ ទន់ភ្លន់គួរជាទីពេញចិត្តដល់អ្នកស្តាប់ ។ ជាមនុស្សចិត្តបុណ្យ ស្រឡាញ់ភាពយុត្តិធ៌ម មានគំនិតប្រាជ្ញាវាងវៃ ជាទីពឹងពាក់ពុំនាក់អាស្រ័យដល់បងប្អូនញាតិមិត្តទាំងឡាយ ។ ឆាប់ខឹងតែឆាប់បាត់ ឥតចេះចងគំនុំគុំគួនយូរទេ តែច្រើនមាននិស្ស័យរញាំរញ៉ូវ កិច្ចការអ្វីៗបើមិនបានធ្វើដោយខ្លួនឯងផ្ទាល់ទេ ចេះតែមិនអស់ចិត្ត ។ ចូលចិត្តឲ្យគេលើកកម្ពស់ខ្លួនឯង ឲ្យគេកោតសរសើរ ។ ច្រើនប្រាស់ចាកចោលពីញាតិបងប្អូនតាំងពីក្មេង ច្រើនតែមិនបាននៅទីកន្លែងកំណើត ។ ជាមនុស្សមានតណ្ហាខ្លាំង ឆាប់ស្រឡាញ់ឆាប់ណាយ គូគ្រងទាល់តែចេះយោគយល់ចិត្តថ្លើមគ្នាឲ្យមែនទែនទើបបានសុខសាន្តជាអង្វែង ៕ មុខរបរដែលសាកសម ជាងគេសំរាប់មនុស្សកើតឆ្នាំនេះគឺ ធ្វើគ្រូបាធ្យាយ មេធាវី ឬ ការងាររដ្ឋការ ក្នុងផ្នែករដ្ឋបាល បើធ្វើស្រែចម្ការ ឬ ការងារដែលយកកម្លាំងកាយទៅប្តូរច្រើនតែមិនសូវទទួលបានផលល្អទេ ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ​ ឆ្លូវ ខាល។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ថោះ វក និង កុរ​ ។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ឆ្លូវ ខាល ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ជូត វក និង រកា ។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំច (ឆ្កែ)',
    subHeader: '(ឆ្នាំច "ធាតុដី" ពង្សយក្សស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សល្អមធ្យមធុនកណ្តាល មាត់ចូលចិត្តចរចាពាក្យអត់ប្រយោជន៍ច្រើន ចិត្តច្រើនប្រែប្រួលមិនសូវទៀង រកស៊ីជួញដូរល្អប្រសើរ បើធ្វើការរាជការល្អគួរសម អ្នកផងស្រឡាញ់ចូលចិត្តច្រើន ៕ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមាននិស្ស័យនិងជោគសំណាងល្អ និងមានសេចក្តីសុខកាយសប្បាយចិត្ត ចៅហ្វាយនាយចិញ្ចឹមបីបាច់រក្សា នឹងបានទៅជាអ្នកមានបុណ្យសក្តិ រហូតមានកិត្តិយសកិត្តិនាមល្បីល្បាញ ។ ជាមនុស្សមានចិត្តបុណ្យសុន្ទរ៍ទានចូលចិត្តជួយអ្នកដទៃ ។ អាចតាំងខ្លួនឲ្យធំដុំបានដោយខ្លួនឯង យូរៗទៅទើបមានជោគលាភធំម្តង ជាមនុស្សមានព្រះកេតុថែរក្សារ អរិសត្រូវមិនអាចប៉ុនប៉ងពាធាបានឡើយ ។ ជាមនុស្សមានវាចាមោះមុត សតិបញ្ញាឈ្លាសវៃ ចិត្តស្រាលឆាប់ខឹងតែឆាប់បាត់ ពេញចិត្តនឹងរសកាមារម្មណ៍ មិនចេះនឿយណាយ ។ មនុស្សនេះច្រើនទទួលជោគលាភពីមនុស្សផ្ទុយភេទ បើធ្វើការជាមួយមនុស្សផ្ទុយភេទហើយ តែងតែទទួលផលបានល្អជាវិសេស ។ មុខរបរដែលសាកសមបំផុតគឺ៖ ទទួលយកអាសា គឺថាការណាដែលគេធ្វើមិនកើតហើយឲ្យមនុស្សនេះទទួលធ្វើរមែងតែបានទទួលលទ្ធផលល្អជាវិសេស នឹងបានទៅជាអ្នកមានស្តុកស្តម្ភកាលបើដល់វ័យចាស់ ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ ជូត ​ថោះ ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ រោង មមែ និង រកា។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ជូត ខាល ឆ្លូវ និង រោង ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ច និង ម្សាញ់។'
    ]
  }, {
    header: 'មនុស្សកើតឆ្នាំកុរ (ជ្រូក)',
    subHeader: '(ឆ្នាំកុរ "ធាតុទឹក" ពង្សមនុស្សស្រី)',
    content: 'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សមានភ័ព្វសំណាងល្អ បើរកស៊ីជួញដូរល្អប្រសើរ ធ្វើការនឹងបានជាធំ តែមានចិត្តទំរន់ក្នុងការងារបន្តិចចូលចិត្តឈឺឆ្អាលក្នុងរឿងអ្នកដទៃ ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមានវាសនាពីអតីតជាតិ មានគំនិតនិងប្រាជ្ញាខ្ពង់ខ្ពស់ ស្រឡាញ់ សភាពស្ងប់ស្ងាត់ និយាយស្តីតិច ចូលចិត្តដេកច្រើនដូចសត្វជ្រូក ។ ចិត្តធន់បើមានរឿងក្រេវក្រោធកើតឡើងហើយ នឹងចងគំនុំជាប់នឹងដួងចិត្ត ។ ជាមនុស្សចូលចិត្តគិតច្រើន មាននិស្ស័យនឹងធឹង មិនទទីសទទាស់ មានមិត្តភក្តិច្រើនធ្វើការងារច្រើនបានជាមេគេដោយសារគំនិតប្រាជ្ញារបស់ខ្លួន មានសេចក្តីស្នេហានឹងន ជាមនុស្សលាក់គំនួចតែប្រច័ណ្ខច្រើន ។ មុខរបរឬការងារ ដែលសមនឹងខ្សែជីវិត របស់មនុស្សកើតឆ្នាំនេះឲ្យចម្រើនរុងរឿងលូតលាស់ត្រូវនឹងសម្លោករបស់ខ្លួននោះគឺ៖ ធ្វើជំនួញជួញប្រែ នឹងបានទៅជាអ្នកមានទ្រព្យស្តុកស្តម្ភ ។ បើធ្វើជារាជការមិនសូវជាល្អប៉ុន្មានទេ ច្រើនតែទទួលទោសទណ្ខ ឬ ត្រូវបានទទួលឥស្សាច្រណែនឈ្នានីសពុំសូវទទួលបានសេចក្តីសុខចម្រើនក្នុងជីវិតឡើយ ពុំនោះទេជាអ្នកប្រកបដោយរោគច្រើន ។',
    loveLife: [
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ ជូត ថោះ មមែ និង កុរ ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​ស្ត្រី​ដែល​កើត​ឆ្នាំ មមី និង រោង។',
      'គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ ឆ្លូវ និង កុរ ។ មិន​គួរ​រៀប​ការ​ជាមួយ​នឹង​បុរស​ដែល​កើត​ឆ្នាំ​ វក ម្សាញ់ មមែ និង រកា ។ សុខ​'
    ]
  },
]

const Details = (props) => {
  return (
    <div>
      <div className='flex max-lg:flex-wrap justify-center items-center mt-2'>
        <img className='max-lg:order-1 rounded-l-lg w-[47vw] lg:w-[28%] h-[65vw] lg:h-[450px] object-cover object-top' src={mArr[Math.floor(Math.random() * mArr.length)]} alt="" />
        <div className='max-lg:order-3 text-center max-lg:p-5 px-5'>
          <h1 className='md:text-[26px] text-[22px] leading-loose tracking-wide'>{khHoroscopeArr[props.selectedZodiac].header}</h1>
          <p className='text-xl leading-loose tracking-wide'>{khHoroscopeArr[props.selectedZodiac].subHeader}</p>
          <p className='text-left text-xl leading-relaxed indent-7'>{khHoroscopeArr[props.selectedZodiac].content}</p>
          <div style={{ backgroundImage: `url(${heartbgimg})`, backgroundSize:`contain`, backgroundRepeat:`no-repeat`, backgroundPosition:`center` }}
          className='min-h-[150px]'>
            <h1 className='text-xl text-[#E61D23]'>ជីវិតគូ</h1>
            <p className='text-left text-lg'><b>បុរស៖</b> {khHoroscopeArr[props.selectedZodiac].loveLife[0]}</p>
            <br />
            <p className='text-left text-lg'><b>ស្ត្រី៖</b> {khHoroscopeArr[props.selectedZodiac].loveLife[1]}</p>
          </div>
        </div>
        <img className='max-lg:order-2 rounded-r-lg w-[47vw] lg:w-[28%] h-[65vw] lg:h-[450px] object-cover object-top' src={wArr[Math.floor(Math.random() * wArr.length)]} alt="" />
      </div>
    </div>
  )
}

export default Details