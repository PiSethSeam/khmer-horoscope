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
import w16 from "../assets/images/woman/17.jpg"
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
import m12 from "../assets/images/man/11.jpg"
import m13 from "../assets/images/man/12.jpg"
import m14 from "../assets/images/man/13.jpg"
import m15 from "../assets/images/man/14.jpg"
import m16 from "../assets/images/man/15.jpg"
import m17 from "../assets/images/man/16.jpg"

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
    header:'មនុស្សកើតឆ្នាំជូត (កណ្តុរ)', 
    subHeader:'',
    content:''
  },
  {
    header:'មនុស្សកើតឆ្នាំឆ្លូវ (គោ)', 
    subHeader:'(ឆ្នាំឆ្លូវ “ធាតុដី“ ពង្សមនុស្សប្រុស)',
    content:'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា មានគេស្រឡាញ់រាប់អានច្រើន តែច្រើន អភ័ព្វគូគ្រង ចិត្តច្រើនរវើរវាយ បើរកស៊ីជំនួញជួញដូរ នឹងបានផលមធ្យម បើធ្វើកិច្ចការរដ្ឋច្រើនបាន បុណ្យស័ក្តិតូចល្មម ជាមនុស្សចូលចិត្តស្នេហា និងចូលចិត្តដើរលេងច្រើន។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សមានគំនិតប្រាជ្ញាវៀងវៃសំដ៏និយាយមោះមុត មានគេគោរព កោតក្រែងច្រើន ជាមនុស្សមានចិត្តបុណ្យកុសល ចូលចិត្តជួយដោះទុក្ខអ្នកមានអាសន្ន មាននិស្ស័យ សុភាពទន់ភ្លន់ តែមិនសូវអើពើនិងញាតិសន្តាន ឆ្លាតខាងនិយាយកំប្លែង ឆេវឆាវ ឆាប់ខឹងតែឆាប់បាត់ រញាំរញី ពេញចិត្តក្នុងកាមារម្មណ៍ច្រើន បងប្អូនញាតិមិត្តពឹងពាក់ពុំសូវបាន។ កាលគឺនៅក្មងលំបាក វេទនាច្រើន តែងនិរាសចាកចោលស្រុកកំណើត និង ឱពុកម្ដាយទៅនៅទីឆ្ងាយ លុះដល់វ័យចាស់ទៅ ទើបមានបានសម្បូណ៌ហូរហៀរទៅដោយភោគទ្រព្យ និងខ្ញុំកំដរបរិវារ។ មុខរបរដែលស័ក្តិសមជាងគេសម្រាប់មនុស្សកើតឆ្នាំឆ្លូវនេះគឺ ៖ ពេទ្យ មេធាវី ឬ ការងាររដ្ឋការ ដែលទាក់ទងទៅនឹងផ្នែករដ្ឋបាល បើធ្វើស្រែចំការ ការងារដែលយកកម្លាំងកាយ ទៅប្តូរច្រើនតែពុំសូវ បានផលល្អ បើសេពគប់សមណៈ និង មានកិត្តិសព្ទល្អ ។'
  } ,   {
    header:'មនុស្សកើតឆ្នាំខាល (ខ្លា)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំថោះ (ទន្សាយ)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំរោង (នាគ)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំម្សាញ់ (ពស់)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំមមី (សេះ)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំមមែ (ពពែ)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំវក (ស្វា)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំ រកា (មាន់)', 
    subHeader:'(ឆ្នាំរកា "ធាតុដែក" ពង្សយក្សប្រុស)',
    content:'មនុស្សប្រុស-ស្រីណា កើតឆ្នាំនេះ ទំនាយទាយថា ជាមនុស្សចិត្តស្រាលឆាប់ខឹង តែមិនចេះ មានគំនុំ ច្រើនមានចិត្តក្លាហានមោះមុត ហ៊ានសម្រេចកិច្ចការអ្វីៗ បានដោយមិនចាំបាច់ពឹងពាក់អ្នកដ៏ៃទ ពីតូចអភ័ព្វញាតិ លុះក្រោយមកនឹងបានជួបជុំវិញ តែប្រយ័ត្នក្នុងការសេពគប់មិត្ត ព្រោះច្រើននាំទុក្ខទោស ដល់ខ្លួន ធ្វើគុណអ្នកដទៃ ច្រើនបានទោសមកវិញ។ មនុស្សកើតឆ្នាំនេះ រមែងជាមនុស្សស្រលាញ់ស្អាត មានរបៀបរៀបរយ វាចានិយាយស្តីសុភាព រាបសារ ទន់ភ្លន់គួរជាទីពេញចិត្តដល់អ្នកស្ដាប់ ។ ជាមនុស្សចិត្តបុណ្យ ស្រលាញ់ភាពយុត្តិធ៌ម មានគំនិតប្រាជ្ញាវាងវៃ ជាទីពឹងពាក់ពំនាក់អាស្រ័យ ដល់បងប្អូនញាតិមិត្តទាំងឡាយ ។ ឆាប់ខឹងតែឆាប់បាត់ ឥតចេះចងគំនុំគុំគួនយូរ តែច្រើនមាននិស្ស័យ រញាំរញ័រ កិច្ចការអ្វីៗបើមិនបានទៅធ្វើដោយខ្លួនឯងផ្ទាល់ ចេះតែមិនអស់ចិត្ត ។ ចូលចិត្តឱ្យគេលើក កំពស់ខ្លួន ឱ្យគេកោតសរសើរ ។ ច្រើនប្រាស់ចាកចេញចោលពីញាតិបងប្អូន តាំងពីក្មេង ច្រើនមិនបាន នៅទីកន្លែងកំណើត ។ ជាមនុស្សមានតណ្ហាខ្លាំង ឆាប់ស្រលាញ់ឆាប់ណាយ គ្រូគ្រងទាល់តែចេះយោគយល់ចិត្តថ្លើមគ្នាឱ្យមែនទែនទើបបានសុខសាន្តជាអង្វែង។ មុខរបរដែលស័ក្តិសមជាងគេសម្រាប់មនុស្សកើតឆ្នាំនេះ គឺធ្វើគ្រូបាធ្យាយ មេធាវី ឬ ការងាររដ្ឋការ ក្នុងផ្នែករដ្ឋបាល បើធ្វើស្រែចម្ការ ឬ ការងារដែលយកកម្លាំង កាយទៅប្តូរមិនសូវបានផលល្អទេ។'
  } ,   {
    header:'មនុស្សកើតឆ្នាំច (ឆ្កែ)', 
    subHeader:'',
    content:''
  } ,   {
    header:'មនុស្សកើតឆ្នាំកុរ (ជ្រូក)', 
    subHeader:'',
    content:''
  } , 

]

const Details = (props) => {
  return (
    <div>
      <div className='flex max-sm:flex-wrap justify-center items-start mt-7'>
        <img className='max-sm:order-1 rounded-l-lg w-[50%] sm:w-60 sm:h-96 h-64 object-cover object-top' src={mArr[Math.floor(Math.random() * mArr.length)]} alt="" />
        <div className='max-sm:order-3 text-center max-sm:p-5 px-5'>
          <h1 className='sm:text-[26px] text-[22px] leading-loose tracking-wide'>{khHoroscopeArr[props.selectedZodiac].header}</h1>
          <p className='text-xl font-extrabold  font-chenla leading-loose tracking-wide'>{khHoroscopeArr[props.selectedZodiac].subHeader}</p>
          <p className='text-left text-xl font-battambang leading-relaxed tracking-wide indent-7'>{khHoroscopeArr[props.selectedZodiac].content}</p>
        </div>
        <img className='max-sm:order-2 rounded-r-lg w-[50%] sm:w-60 sm:h-96 h-64 object-cover object-top' src={wArr[Math.floor(Math.random() * wArr.length)]} alt="" />
      </div>
    </div>
  )
}

export default Details