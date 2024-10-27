import Review from "./Review";
import hdshot1 from "../../assets/hdshot1.jpeg"
import hdshot2 from "../../assets/hdshot2.jpeg"
import hdshot3 from "../../assets/hdshot3.jpeg"
import hdshot4 from "../../assets/hdshot4.jpeg"
import hdshot5 from "../../assets/hdshot5.jpeg"
import testimonialCSS from "./Testimonial.module.css"

const Testimonial= ()=>{
    return (
        <div class={testimonialCSS.outercontainer}>
            <div  className={testimonialCSS.container}>
            
            <Review description="Never thought an app would stylish become my
             everyday way to bank and have access to physical cash. @kudabank is sleek"
             
             image = {hdshot1} name="Babajide Duroshola"/>

            <Review description="This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!"
             
             image = {hdshot2} name="@RealSOK_"/>


            <Review description="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!"
             
             image = {hdshot3} name="Adebambo Oyekan"/>


            <Review description="I highly recommend this app, it does what it says The bank of the free. I have received my kuda card."
             
             image = {hdshot4} name="Ifeanyichukwu Obaji"/>


            <Review description="Just joined the best Digital Bank in Nigeria

            I have no complaints whatsoever since i started using Kuda"
             
             image = {hdshot5} name="
             Tomisinv"/>
             <Review description="Never thought an app would stylish become my
             everyday way to bank and have access to physical cash. @kudabank is sleek"
             
             image = {hdshot1} name="Babajide Duroshola"/>

            <Review description="This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!"
             
             image = {hdshot2} name="@RealSOK_"/>


            <Review description="I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!"
             
             image = {hdshot3} name="Adebambo Oyekan"/>


            <Review description="I highly recommend this app, it does what it says The bank of the free. I have received my kuda card."
             
             image = {hdshot4} name="Ifeanyichukwu Obaji"/>


            <Review description="Just joined the best Digital Bank in Nigeria

            I have no complaints whatsoever since i started using Kuda"
             
             image = {hdshot5} name="
             Tomisinv"/>



        </div>
        

        </div>
        
    )
}
export default Testimonial;