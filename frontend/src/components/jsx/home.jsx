import '../CSS/home.css';
import Navbar from './navbar';
import User from '../../images/user.svg';
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
  

  return (
    <div className="homediv ">
      <Navbar />
      <div className=" grid grid-cols-5">
        <div className="lg:col-start-1 hidden lg:block  lg:col-span-1">
          <img src={User} alt="user" className="w-20 mx-10 imghome " />
          <h5 className="mx-6 mb-10 title">Anonymous</h5>
          <div className="mb-4 mx-6">
            <h3 className="title text-xl title  text-center">CHANNELS</h3>
            <Link to="/channel/id">
              <div className="channels rounded-lg px-4 py-2 my-4">
                <p>Bits Goa</p>
                <p className="text-gray-500 text-sm">Members : 17</p>
              </div>
            </Link>
            <Link to="/channel/id">
              <div className="channels rounded-lg px-4 py-2">
                <p>Bits Pilani</p>
                <p className="text-gray-500 text-sm">Members : 29</p>
              </div>
            </Link>
          </div>
        </div>

        <div className=" lg:col-start-2 col-start-1 middiv lg:col-span-3 col-span-5 ">
          <div className="flex flex-row justify-around midhead  ">
            <Link
              to="/following"
              className="midlink title sm:mx-4 mx-0 px-4 bg-gray-800 rounded-lg  md:bg-transparent text-center my-4 py-2"
            >
              sheesh, what did my friend do?
            </Link>
            <Link
              to="/feed"
              className="midlink title mx-4 md:mx-0 px-4 bg-gray-800 rounded-lg  md:bg-transparent py-2 my-4  text-center"
            >
              Let's Hear it!
            </Link>
            <Link
              to="/notif"
              className="midlink text-center sm:mx-4 mx-0 bg-gray-800 rounded-lg  md:bg-transparent my-4 title px-4 py-2"
            >
              tagged me in a gossip?
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="postbox md:w-4/5 rounded-md">
              <h3 className="Semihead text-center ">Start a gossip!</h3>
              <form>
                <label
                  for="what's it about?"
                  class="block text-gray-500 font-medium text-sm mb-2"
                >
                  what's it about?
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Stuff"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
                <label
                  for="something"
                  class="block text-gray-500 font-medium text-sm mb-2"
                >
                  start gossiping
                </label>
                <textarea
                  value={this.state.textAreaValue}
                  onChange={this.handleChange}
                  rows={5}
                  cols={5}
                />
                
              </form>
            </div>
          </div>
        </div>
        <div className="col-start-5 lg:block hidden col-span-1">
          <div className="my-6 mx-6">
            <h3 className="text-xl text-center title">
              Everyone knows this <br /> ( except you? )
            </h3>
            <Link to="/thread/id">
              <div className=" px-4 py-2 mt-4 righthread">
                <p className="topmain text-gray-300 ">
                  I didn't think this would happen to me but !
                </p>
                <p className="topsub text-gray-500">Upvotes:17</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
