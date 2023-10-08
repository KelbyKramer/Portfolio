import React from 'react'
import { ReactPhotoCollage } from "react-photo-collage";
import "./AboutMe.css";


export default function Services() {

    const setting = {
        width: "screen",
        height: ["400px", "400px"],
        layout: [2, 5],
        photos: [
          {
            source:
              "images/img-11.jpg"
          },
          {
            source:
                "images/img-12.jpg"          
          },
          {
            source:
              "images/img-14.jpg"
          },
          {
            source:
                "images/img-15.jpg"          
          },
          {
            source:
              "images/img-16.jpg"
          },
          {
            source:
              "images/img-17.jpg"
          },
          {
            source:
              "images/img-18.png"
          }
        ],
        showNumOfRemainingPhotos: false
      };

    return (
        <> 
            <ReactPhotoCollage {...setting} />  
        <div>
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <h1 class="mx-3 text-4xl font-bold">Interesting Facts</h1>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
        </div>
        <div class="flex justify-left items-center my-10 px-10">
            <div className="work-div">
                Professional Basketball Player (Montenegro), 3x Men's Basketball Team Captain, Minnesota State University
            </div>
        </div>
        <div class="flex justify-left items-center my-10 px-10">
            <div className="work-div">
                I'm 7 feet tall
            </div>
        </div>
        <div class="flex justify-left items-center my-10 px-10">
            <div className="work-div">
                Guinness World Record Holder (Fastest human assembly of first 25 rows of pascals triangle)
            </div>
        </div>
        <div class="flex justify-left items-center my-10 px-10">
            <div className="work-div">
                Can solve a Rubik's Cube Blindfolded
            </div>
        </div>

        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <h1 class="mx-3 text-4xl font-bold">Hobbies</h1>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
            
        </div>
        <div class="flex justify-left items-center my-10 px-10">
            <div className="work-div">
                Speedcubing
            </div>
        </div>
        

        <div class="flex justify-left items-center my-10 px-8">
            <div className="work-div">
                Playing Piano
            </div>
        </div>

        <div class="flex justify-left items-center my-10 px-8">
            <div className="work-div">
                Building Computers
            </div>
        </div>
        <div class="flex justify-left items-center my-10 px-8">
            <div className="work-div">
                Learning and Being Challenged
            </div>
        </div>
        </div>
        </>
    )
}