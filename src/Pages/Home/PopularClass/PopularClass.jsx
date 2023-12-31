
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import ClassItem from '../ClassItem/ClassItem';
import useClass from '../../../Hooks/useClass';


const PopularClass = () => {
    const [popularClass] = useClass();
    const popular = popularClass.filter(item => item.category === 'popular');
    // const [popularClass, setPopularClass] = useState([]);

    // useEffect(() =>{
    //     fetch('popularClass.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularClasses = data.filter(item=>item.category === 'popular')
    //         console.log(popularClass);
    //          setPopularClass(popularClasses)})
    // },[])

    return (
        <section>
            <SectionTitle
                heading="Our Top Class"
                subHeading="Popular Class"
            
            ></SectionTitle>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 border rounded-lg'>
                {
                   popular.map(clas => <ClassItem
                    key={clas._id}
                    clas={clas}
                    
                    ></ClassItem>)
                }
            </div>
        </section>
    );
};

export default PopularClass;