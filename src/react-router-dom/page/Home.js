import React from 'react'
import { Link, useLocation, useSearchParams, createSearchParams } from 'react-router-dom'
export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(useLocation());
    const citySearchparam = searchParams.get('city');
  return (
    <>
        {
            ['delhi', 'punjab', 'up', 'himachal'].map((value, index)=>{
                return (
                    <div key={index}>
                        <input 
                            type="radio" 
                            id={value}
                            checked={value==citySearchparam}
                            value={value}
                            onChange={(e)=>{
                                setSearchParams(createSearchParams({city: value}))
                            }}
                        />
                        <label htmlFor={value}>{value}</label>
                    </div>
                )
            })
        }
    </>
  )
}
