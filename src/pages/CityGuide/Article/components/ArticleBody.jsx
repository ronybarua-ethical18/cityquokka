import ArticleSidebar from "../../Article/components/ArticleSidebar";
import ArticleHeader from "./ArticleHeader";


export default function MarketBody() {
    return (
        <main className="w-full relative pb-10">
            <div className="w-full flex justify-center max-sm:hidden"></div>
            <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
                <article className="w-full max-w-[960px] max-md:w-full">
                    <div className="w-full max-w-[960px] max-lg:w-full">
                        <ArticleHeader />
                    </div>
                    <div className="text-[30px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8 max-w-[960px] max-sm:max-w-[330px]">
                        <p>
                        &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;       Sydney, Australia, is a vibrant city filled with iconic landmarks, stunning beaches, and a rich cultural scene that truly comes alive during the holiday season. December is the perfect time to visit, as summer begins in the Southern Hemisphere and Sydney&apos;s social calendar is packed with festive events, outdoor adventures, and exciting activities. Whether you&apos;re a local looking to enjoy the season or a visitor wanting to experience the best of Sydney, here are the top things to do in December.
                        </p>
                    </div>
                </article>
            </div>
            
            <aside className="absolute top-[180px] right-0 max-lg:relative max-lg:mt-8">
                <ArticleSidebar />
            </aside>
            <div className="h-[30px]"></div>
      <div className="w-full h-[4px] bg-[#EFEFEF] max-w-[300px] mx-auto sm:max-w-[300px]"></div>
    
        </main>
    );
}
