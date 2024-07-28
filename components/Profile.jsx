import React from 'react';
import Link from 'next/link';

const Profile = () => {
    return (
        <section className="flex items-center mt-32 mb-24 py-10 px-4 sm:px-32">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-10" data-aos="zoom-in">Profil Wilayah</h3>
 
                    <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow duration-300 my-4" data-aos="fade-up">
                        <iframe 
                            className="w-full h-128"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31656.539960191367!2d108.5508532662642!3d-7.346317966546558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f62ff6d6aaf75%3A0xa19ef8d460db3fa1!2sMekarharja%2C%20Purwaharja%2C%20Banjar%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1720666193590!5m2!1sen!2sid"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <Link 
                            href='/public/wilayah'
                            className="text-blue-500 hover:text-blue-700 font-bold pt-4 block"
                        >
                        Baca Selengkapnya
                        </Link>
                    </div>
            </div>
        </section>
    )
};

export default Profile;