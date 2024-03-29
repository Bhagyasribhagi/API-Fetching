import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './productitem.css'
import {Card,CardBody,CardFooter,Image,Stack,Heading,Text,Button,Divider,ButtonGroup} from  '@chakra-ui/react'
const ProductItem = () => {
    const {id}=useParams()
    const [data,setData]=useState({})

    useEffect(()=>{
        const fetchedData=async()=>{
            try{
            const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(response)
            if(response.status===200){
                setData(response.data)
            }
        }
        catch (error){
            console.log(`Error while fetching data ${data.message}`)
        }
        }
        fetchedData();
    },[id])
    
  return (
    <div className='container'>
   
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
    
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={data.image}
    alt='image'
    className='image'
  />

  <Stack>
    <CardBody>
      <Heading size='md' className='title'>{data.title}</Heading>

      <Text py='2' className='data'>
       {data.description}
      </Text>
    </CardBody>
    <Text color='blue.600' fontSize='2xl' className='price'>
         Price:   {`$${data.price}`}
        </Text>
    <CardFooter>
   
      <Button variant='solid' colorScheme='blue' className='button1'>
        Buy Now
      </Button>
      <Button variant='solid' colorScheme='green' className='button2'>
       Add to Card
      </Button>
    </CardFooter>
  
    
  </Stack>
</Card>
</div>
  )
}

export default ProductItem