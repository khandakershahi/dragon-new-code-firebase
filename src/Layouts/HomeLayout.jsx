import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header>

                </Header>
                <section className='w-[1140px] mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-[1140px] mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-[1140px] mx-auto my-3 grid grid-cols-12 gap-3'>
                <aside className='col-span-3 sticky top-0 h-fit'>

                    <LeftAside>

                    </LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state == 'loading' ? <Loading></Loading> : <Outlet>

                    </Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;