import React from 'react'

function Triall() 
    {
        const [obj, setObj] = useState({});
        const [ary, setAry] = useState([]);
        const [hobbies, setHobbies] = useState([]);
    
        const getData = (a) => {
            const { name, value, type, checked } = a.target;
            if (type === 'checkbox') {
                setHobbies(prevHobbies => {
                    const newHobbies = checked
                        ? [...prevHobbies, value]
                        : prevHobbies.filter(hobby => hobby !== value);
                    return newHobbies;
                });
            } else {
                setObj(prevObj => ({ ...prevObj, [name]: value }));
            }
        };
    
        const data = () => {
            // Remove duplicate hobbies using filter
            const uniqueHobbies = hobbies.filter((hobby, index, self) => self.indexOf(hobby) === index);
            
            const newObj = { ...obj, hobbies: uniqueHobbies };
            setAry(prevAry => [...prevAry, newObj]);
            console.log('Filtered Hobbies:', uniqueHobbies);
            console.log('Array:', ary);
        };
    
   

    
        return (
            <div>
                <form action="" className='mx-auto w-50 p-5 my-4 shadow-lg '>
                    <label htmlFor="">Name</label>
                    <input type="text" className='w-100' name='name' onChange={getData} /><br />
                    <label htmlFor="">Email</label>
                    <input type="email" className='w-100' name='email' onChange={getData} /><br />
                    <label htmlFor="">Password</label>
                    <input type="password" className='w-100' name='password' onChange={getData} /><br />
                    <input type="radio" className='mx-3' name='gender' value='Male' onChange={getData} />Male
                    <input type="radio" className='mx-3' name='gender' value='Female' onChange={getData} />Female<br />
                    <input type="checkbox" className='mx-3' value='Cricket' onChange={getData} />Cricket
                    <input type="checkbox" className='mx-3' value='Football' onChange={getData} />Football
                    <input type="checkbox" className='mx-3' value='VideoGraphy' onChange={getData} />VideoGraphy <br />
                    <input type="file" />
    
                    <button type='button' className='btn btn-success my-4' onClick={data}>Save</button>
                </form>
            </div>
        );
    }

export default Triall