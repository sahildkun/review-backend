import React, { useEffect, useState } from "react";
import jsonData from "../assets/indexed.json";
import { Link, useNavigate } from "react-router-dom";
import NavigationMenu from "./Navbar2";

const AutocompleteComponent = () => {
  let [code, setCode] = useState("");

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const extractedCode = inputValue.split(" ")[0]; // Extracting the first word as the code
    setCode(extractedCode);
  };



 
  return (
    <>
      <NavigationMenu />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-white  sm:text-5xl   xl:text-6xl/none">
                  Find the Best Courses for You
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover top-rated courses, read reviews, and find the perfect fit for your educational goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <input
                    className="input input-bordered join-item w-3/4  "
                    placeholder="Enter Course Name or Course Code..."
                    autoComplete="on"
                    list="datalistOptions"
                    onChange={handleInputChange}
                  />
                  <datalist id="datalistOptions">
                    {Object.entries(jsonData).map(([code, { title, instructors }]) => (
                      <option key={code} value={`${code} - ${title}`} />
                    ))}
                  </datalist>
                  <button className=" ml-10 hover:text-[#535bf2]   inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" type="submit" onClick={() => navigate(`/posts/${code}`)}>
                    Search
                  </button>
                </div>
              
              </div>
            </div>
            <img
              src="https://imgs.search.brave.com/xvvGnk0zqBUA0YmR20NLpPn8WZfA1iqs6ozKyPO-0B4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI2/NDY0MTU4L3Bob3Rv/L2NhdC13aXRoLW9w/ZW4tbW91dGguanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVFy/OURDVmt3S21fZHpm/amtlTjVmb0NCcDdj/M0VmQkZfaTJBMGV0/WWlKT0E9"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Top Rated Courses</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse our selection of the highest-rated courses, based on student reviews and ratings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                {/* <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <span className="text-lg font-semibold">4.9</span>
                      </div>
                      <Badge variant="secondary">Computer Science</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Introduction to Algorithms</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Learn the fundamental algorithms and data structures needed to solve complex problems.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        View Course
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <span className="text-lg font-semibold">4.7</span>
                      </div>
                      <Badge variant="secondary">Business</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Fundamentals of Entrepreneurship</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Explore the key principles and strategies for starting and growing a successful business.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        View Course
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <span className="text-lg font-semibold">4.8</span>
                      </div>
                      <Badge variant="secondary">Design</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">UI/UX Design Fundamentals</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Develop the skills to create visually appealing and user-friendly digital experiences.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        View Course
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <span className="text-lg font-semibold">4.6</span>
                      </div>
                      <Badge variant="secondary">Marketing</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Digital Marketing Strategies</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Learn the latest techniques and tools to effectively market your business online.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        View Course
                      </Link>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </section>
    
    </>
  );
};

export default AutocompleteComponent;