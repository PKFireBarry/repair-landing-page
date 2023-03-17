import React from "react";
import shipping from '../Photos/shipping.jpg'
import store from '../Photos/store.jpg'
import { motion } from 'framer-motion'

function Faq() {
  return (
    <div className="p-12 bg-[#004369] text-white ">
      <h1 className='text-3xl font-extrabold text-white pb-4'>Frequently asked Questions</h1>
      <p className="text-xl font-extrabold">How does this work?</p>
      <div>
        <h1 className='text-base font-semibold leading-7 '>There are two ways for us to service your device:</h1>
        <div className="flex flex-col p-8">
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-extrabold" >Mail it to our store.</h1>
                <p>
                  Fill out the form on our mail in page, and follow the
                  instructions on our mail in page to send your device in for
                  repair. We will repair your device and send it back to you. If
                  you simply want an estimate, you may send it in requesting an
                  estimate and type in the description that you want an
                  estimate, not service. We will not perform a service before
                  you approve it unless you explicitly request otherwise.
                </p>
                <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Learn More</button>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <motion.img

                    initial={{ x:300 , opacity: 0}}
                    transition={{ duration: .7 }}
                    whileInView={{ opacity: 1, x: 0}}
                    src={shipping}
                    className='rounded-lg'
                />
              </div>
            </div>
          </div> 
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <motion.img

                    initial={{ y:300 , opacity: 0}}
                    transition={{ duration: .5 }}
                    whileInView={{ opacity: 1, y: 0}}
                    src={store}
                    className='rounded-lg'
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-extrabold">Bring it to our store.</h1>
                <p>
                Walk into our store and we will fix your device for you. We will provide you with a free repair estimate so you know what the cost of fixing your device is – before we work on it.
                </p>
                <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 pb-1">
        <p className="text-base font-semibold leading-7 p-4">
          For our location, come by between 11 AM to 7 PM on weekdays or 12 PM
          to 4 PM on weekends for a free consultation. We will diagnose the
          issue with your machine and give you all of your options.If you don’t
          know what service you need, feel free to email us, call us, and talk
          to someone about your problem. Calling is quickest although live-chat
          and email options are available.
        </p>
      </div>
      <div className="p-12 grid grid-cols-1">
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary className="hover:underline">What are your hours, when can I come to your store?</summary>
          <p className="pt-4">
            We are open from 11am – 7pm Monday to Friday and 12pm to 4pm on
            Saturday and Sunday. We do not have appointments, so you can just
            walk in anytime we are open so we can take a look at your device!
          </p>
        </details>
        <details className="bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4">
          <summary >What does it cost for you to look at my Mac?</summary>
          <p className="pt-4">
            NOTHING! We feel diagnostic fees are predatory in the laptop repair
            industry, and do not charge them(except for PCs, which to be honest
            with you, are better serviced by D&Q on Avenue B between 12th and
            13th Street).
          </p>
        </details>

        <details  className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>
            How long does getting an estimate on what cost of repair take?
          </summary>
          <p className="pt-4">
            This depends on your issue. We can usually give you an estimate
            while you wait, unless you have liquid damage, in which case you
            would have to leave it for an estimate.
          </p>
        </details>
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>
            Should I wait for my Macbook to dry out before bringing it to you?
            Maybe it will work again!
          </summary>
          <p className="pt-4">
            I go over the reality of that in this video. You will see what
            happens when liquid “dries out” inside a laptop motherboard, what it
            looks like, and how we deal with it. I will leave you to come to
            your own conclusion!
          </p>
        </details>
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>Are you only Mac?</summary>
          <p className="pt-4">
            Yes and no. For network and server issues we can help with any
            platform. While we can work on PC laptops, we are limited in the
            services we offer. It’s nothing elitist; we wrote this entire site
            on a Thinkpad T520! The issue is most of the PC laptops we see cost
            almost as much to fix as the machine is worth and we find that
            people’s time constraints do not often allow for a proper estimate.
            It is feasible to stock most Apple laptop parts that we need, but
            not feasible to stock every single PC part there is, there are too
            many models. Considering the time constraints of our customers and
            the lack of ability to stock every PC laptop part there is, we’re
            just not best suited to servicing most PC laptops. If we feel we’re
            not the best fit for your issue, we will refer you to someone who
            is.
          </p>
        </details>
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>Are you Apple certified?</summary>
          <p className="pt-4">
            Absolutely not. Being Apple certified would tie my hands to the
            point where even replacing a fuse would get me in trouble. I go over
            that in a tongue in cheek fashion in this video in response to the
            idea that unauthorized repair technicians are “idiots.” Being Apple
            authorized would tie my hands to the point where I have to charge
            you $750-$1250 to replace your motherboard because of that one
            component!
          </p>
        </details>
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>
            Doesn’t a lack of certification mean you have no idea what you’re
            doing, or that my repair has a chance of premature failure?
          </summary>
          <p className="pt-4">
            No. To be an Apple certified warranty repair center, to the point
            that repairs are 100% officially covered under an Apple warranty,
            the service center must buy their parts from Apple. This gives Apple
            bargaining power in setting prices of parts, which results in
            unnecessarily expensive repairs. In order to make a profit, a repair
            shop must set a very high price for any given service. I am sure
            some of you who have been to Tekserve have heard “your machine is in
            warranty, so it will be $600.” At the time of this email, that LCD
            cost $68 from a Taiwanese vendor of Grade A LG panels. Apple does
            not manufacture any of these parts they resell to the repair shops.
            Apple sells the part to a service center for 3-6 times its actual
            cost, which is the reason Apple Authorized service centers are so
            expensive. Apple knows that customers prefer shops that are Apple
            authorized service centers. It has little to do with getting you
            better service or a better repair.
          </p>
        </details>
        <details className='bg-slate-100 hover:bg-green-100 text-black font-bold py-2 px-4 transition-transform duration-1000 ease-in-out rounded-lg mb-4'>
          <summary>
            But doesn’t Apple rigorously test those parts to ensure quality?
          </summary>
          <p className="text-base font-semibold leading-7 p-4">
            No. Are you curious as to what “Apple Authorized” means? One might
            assume this makes it a better part, but they’re the same parts we
            purchase. As one can see from forums such as macrumors, Apple has no
            real high tech process to weed out displays with issues such as dead
            pixels, as a lot of people receive displays with them. Look up the
            issues with the LG display on 15″ Retinas. The Rossmann difference
            is that we test parts the old fashioned way, by plugging them in
            before using them. The personal touch can’t be beat.
          </p>
        </details>
      </div>
    </div>
  );
}

export default Faq;
