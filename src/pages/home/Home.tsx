import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SWAPI.png';
import JorgeImage from '../../assets/images/Jorge.png';
import JudithImage from '../../assets/images/Judith.png';
import twbento from '../../assets/images/bento-tailwind.png';
import fbbento from '../../assets/images/fbbento.png';
import ghbento from '../../assets/images/ghbento.png';

const people = [
  {
    name: 'Jorge',
    role: 'Developer',
    imageUrl: JorgeImage,
    linkedinUrl: 'https://www.linkedin.com/in/jdiaz1302/',
  },
  {
    name: 'Judith',
    role: 'Developer',
    imageUrl: JudithImage,
    linkedinUrl: 'https://www.linkedin.com/in/judith-ar%C3%A9valo-0b8487187/',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-amber-400">
    {/* Hero Section with reduced spacing */}
    <div className="relative isolate px-6 pt-10 lg:px-8"> {/* Reduced top padding */}
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-20"> {/* Reduced vertical padding */}
        <div className="text-center">
          <img src={Logo} alt="SWAPI Logo" className="mx-auto h-auto" width="400px" /> {/* Slightly reduced logo size */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"> {/* Slightly reduced text size */}
            Star Wars API Project
          </h1>
          <p className="mt-4 text-lg leading-8 text-amber-300"> {/* Reduced top margin */}
            Explore the Star Wars universe with our powerful API integration.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6"> {/* Reduced top margin */}
            <Link
              to="/session"
              className="rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>

      {/* Bento Grid Section */}
      <div className="bg-zinc-200 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-zinc-900">Multiple Technologies Explored</h2>
          <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
            An React App to get started with coding.
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-zinc-700 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-amber-300 max-lg:text-center">
                    TailwindCSS
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-amber-200 max-lg:text-center">
                    For the style we're using TailwindCSS integrated with React + Typescript
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-zinc-600 bg-zinc-800 shadow-2xl">
                    <img
                      src={twbento}
                      alt="Description of the image"
                      className="w-full h-full max-w-xs lg:max-w-sm object-contain"
                    />
                    <div className="h-full w-full bg-amber-400"></div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-amber-400/10 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-zinc-700 max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-amber-300 max-lg:text-center">
                    Firebase Auth
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-amber-200 max-lg:text-center">
                    Firebase to add Authentication
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                      src={fbbento}
                      alt="Description of the image"
                      className="w-full h-auto max-w-xs lg:max-w-sm object-contain"
                  />
                  <div className="w-full h-40 bg-amber-400"></div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-amber-400/10 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-zinc-700"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-amber-300 max-lg:text-center">GitHub</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-amber-200 max-lg:text-center">
                    A Github repository to show this project and it's code.
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                      src={ghbento}
                      alt="Description of the image"
                      className="w-full h-auto max-w-xs lg:max-w-sm object-contain"
                  />
                  <div className="h-[min(152px,40cqw)] w-full bg-amber-400"></div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-amber-400/10"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-zinc-700 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-amber-300 max-lg:text-center">
                    React + Typescrypt
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-amber-200 max-lg:text-center">
                    We're using React with Typescrypt to bring this project to life
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-zinc-800 shadow-2xl">
                    <div className="flex bg-zinc-700/40 ring-1 ring-amber-400/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-amber-300">
                        <div className="border-b border-r border-b-amber-400/20 border-r-amber-400/10 bg-amber-400/5 px-4 py-2 text-amber-400">
                          App.tsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                    <code>{`function App() {
                      return (
                        <AuthProvider>
                          <UserProvider>
                            <BrowserRouter>
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/session" element={<Session />} />
                                <Route element={<ProtectedRoute />}>
                                  <Route path="/dashboard" element={<Dashboard />}>
                                    <Route index element={<div>Dashboard Home</div>} />
                                    <Route path="characters" element={<Characters />} />
                                  </Route>
                                </Route>
                                <Route path='*' element={<Navigate to="/" replace />} />
                              </Routes>
                            </BrowserRouter>
                          </UserProvider>
                        </AuthProvider>
                      )
                    }`}</code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-amber-400/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Team</h2>
            <p className="mt-6 text-lg leading-8 text-amber-300">
              The team in charge of building this project.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {people.map((person) => (
              <li key={person.name} className="bg-zinc-800 rounded-lg p-6">
                <img className="w-full h-auto rounded-2xl object-contain" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">{person.name}</h3>
                <p className="text-base leading-7 text-amber-300">{person.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.linkedinUrl} className="text-amber-400 hover:text-amber-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-amber-300">
              A KODIGO project from Jorge and Judith. 
              <a href="https://github.com/alltrad3s/StarWarsAPI" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 ml-2">
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;