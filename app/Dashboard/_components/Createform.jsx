"use client"


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  
  } from "@/components/ui/dialog"
  import { Textarea } from "@/components/ui/textarea"
import connectToDatabase, { db } from "@/configs"
import run, { apiKey, chatSession } from "@/configs/AImodel"
import { forms } from "@/configs/schema"
import moment from "moment"


  

  import React, { useState } from 'react'
  
  function Createform() {
    const [opendialog,setopendialog]=useState(false)
    const [userinput,setuserinput]=useState('')
    const [loading,setloading]=useState(false)
    

    const PROMPT='on the basis of description please give form in json format with form title,form subheading,form field,form name,placeholder name,and form label,only give json format '


    const oncreateform= async()=>{
        console.log(apiKey);
        setloading(true)
        
        
        const result = await chatSession.sendMessage("Description:"+userinput+PROMPT);
  console.log(result.response.text());

  if(result.response.text()){
try {

 const res=await db.insert(forms).values({
  jsonform:result.response.text(),
  createddate:moment().format('DD/MM/yyyy')
 }).returning({id:forms.id})
    console.log("new form id",res[0].id);
    
} catch (error) {
    console.log(error);
    
}
   
  }
    }
    return (
        <>
       <Button onClick={() => setopendialog(true)}>
  Create Form
</Button>
<Dialog open={opendialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create new form</DialogTitle>
      <DialogDescription>
        {/* Keep only inline or text elements here */}
        <Textarea
          onChange={(e) => setuserinput(e.target.value)}
          placeholder="Write your description"
        />
      </DialogDescription>
      {/* Move the <div> outside of <DialogDescription> */}
      <div className="flex gap-3 my-3 justify-end">
        <Button onClick={() => setopendialog(false)} variant="destructive">
          Cancel
        </Button>
        <Button onClick={oncreateform} variant="secondary">
          Create
        </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>


      </>
      
    )
  }
  
  export default Createform