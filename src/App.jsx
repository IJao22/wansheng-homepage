import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  ArrowUpRight,
  CupSoda,
  Leaf,
  Menu,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "产品", href: "#products" },
  { label: "风味", href: "#flavors" },
  { label: "目录", href: "#catalog" },
  { label: "关于", href: "#about" },
  { label: "联系", href: "#contact" },
];

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const assets = {
  hero: asset("assets/brand-kv-poster-web.webp"),
  logo: asset("assets/wansheng-logo-primary-web.webp"),
  grape: asset("assets/rain-night-grape-front-web.webp"),
  oolong: asset("assets/evening-breeze-oolong-front-web.webp"),
  peach: asset("assets/rain-alley-peach-front-web.webp"),
};

const reveal = {
  hidden: { opacity: 0.88, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroReveal = {
  hidden: { opacity: 0.96, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const flavors = [
  {
    title: "雨夜葡萄",
    label: "雨夜果香 / 轻气泡",
    text: "葡萄的暗甜被压低，尾段留一点雨夜里的清冷酸感，适合慢慢喝。",
    image: assets.grape,
    icon: CupSoda,
    hover: "hover:bg-rust hover:text-paper",
  },
  {
    title: "晚风乌龙",
    label: "乌龙茶感 / 清爽回甘",
    text: "茶香不走厚重奶茶路线，保留晚风里的轻涩、回甘和低负担气泡感。",
    image: assets.oolong,
    icon: Leaf,
    hover: "hover:bg-amber",
  },
  {
    title: "雨巷白桃",
    label: "白桃水汽 / 清透回甘",
    text: "白桃味压得很轻，像雨后巷子里一点果皮香，甜度留在后面。",
    image: assets.peach,
    icon: Sparkles,
    hover: "hover:bg-mist",
  },
];

const catalog = [
  {
    name: "雨夜葡萄",
    type: "250ml Can",
    year: "轻气泡",
    image: assets.grape,
  },
  {
    name: "晚风乌龙",
    type: "250ml Can",
    year: "茶感气泡",
    image: assets.oolong,
  },
  {
    name: "雨巷白桃",
    type: "250ml Can",
    year: "低糖气泡",
    image: assets.peach,
  },
];

const tasteOptions = [
  {
    name: "雨夜葡萄",
    title: "雨夜葡萄 / Rain Night Grape",
    desc: "深紫葡萄走得更暗，酸甜收窄，喝起来不像糖浆，更适合晚上慢慢喝。",
    color: "#A9442F",
  },
  {
    name: "晚风乌龙",
    title: "晚风乌龙 / Evening Breeze Oolong",
    desc: "乌龙茶香带一点轻涩和回甘，气泡很细，口感偏清爽，不往厚甜茶饮上靠。",
    color: "#D8B45A",
  },
  {
    name: "雨巷白桃",
    title: "雨巷白桃 / Rain Alley Peach",
    desc: "白桃、雨后水汽和很轻的气泡感。甜度控制在不抢口的位置，更接近一罐夜里能喝完的清爽饮料。",
    color: "#7C9AA6",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex border border-current px-3 py-1 font-condensed text-xs font-black uppercase tracking-[0.22em]">
      {children}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (latest) => setScrolled(latest > 18)), [
    scrollY,
  ]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.52 }}
        className={`fixed left-0 top-0 z-50 w-full border-b border-ink transition-all duration-300 ${
          scrolled
            ? "bg-paper shadow-[0_4px_0_rgba(24,19,19,0.18)]"
            : "bg-paper"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-[1540px] grid-cols-[1fr_auto] items-center px-4 md:h-[72px] md:grid-cols-[1fr_auto_1fr] md:px-6">
          <a
            href="#top"
            className="font-serifPoster text-3xl font-black leading-none md:text-[2.6rem]"
          >
            晚声
          </a>

          <nav className="hidden h-full border-x border-ink md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center px-6 text-sm font-bold transition-colors hover:bg-ink hover:text-paper"
              >
                {item.label}
                <span className="absolute bottom-5 left-6 h-px w-0 bg-current transition-all duration-200 group-hover:w-[calc(100%-3rem)]" />
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="hidden border border-ink bg-ink px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-rust md:inline-flex"
            >
              预约试饮
            </a>
            <button
              type="button"
              aria-label={open ? "关闭菜单" : "打开菜单"}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center border border-ink bg-paper md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-40 bg-ink px-5 pb-7 pt-24 text-paper md:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="border-y border-paper/35">
                {navItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.label}
                    onClick={() => setOpen(false)}
                    className="block border-b border-paper/20 py-5 font-serifPoster text-[clamp(2.9rem,15vw,4.5rem)] font-black leading-none"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border border-paper px-5 py-4 text-xl font-bold"
              >
                预约试饮 <ArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] overflow-hidden border-b border-ink bg-paper pt-16 md:pt-[72px]"
    >
      <div className="absolute inset-0 poster-grid opacity-[0.16]" />
      <div className="mx-auto grid min-h-[calc(90vh-64px)] max-w-[1540px] grid-rows-[1fr_auto] px-4 md:min-h-[calc(90vh-72px)] md:px-6">
        <div className="relative grid items-center gap-8 py-10 md:grid-cols-[0.98fr_1.02fr] md:py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={heroReveal} className="mb-5">
              <SectionLabel>Night Drink Label / 250ml Sparkling</SectionLabel>
            </motion.div>
            <motion.h1
              variants={heroReveal}
              className="font-serifPoster text-[clamp(4.4rem,12vw,10rem)] font-black leading-[0.85] tracking-normal"
            >
              晚声
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mt-6 max-w-2xl text-[clamp(1.3rem,3vw,2.45rem)] font-semibold leading-tight"
            >
              在喧闹之下，听见晚声
            </motion.p>
            <motion.div variants={heroReveal} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 font-bold text-paper transition-colors hover:bg-rust"
              >
                查看产品 <ShoppingBag size={17} />
              </a>
              <a
                href="#flavors"
                className="inline-flex items-center gap-2 border border-ink bg-paper px-5 py-3 font-bold transition-colors hover:bg-amber"
              >
                选择风味 <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.96, y: 14, rotate: -1.1 }}
            animate={{ opacity: 1, y: 0, rotate: -1.1 }}
            transition={{
              delay: 0.28,
              duration: 0.78,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[390px] md:min-h-[640px]"
          >
            <div className="absolute right-0 top-3 h-[78%] w-[90%] border border-ink bg-ink md:h-[84%]">
              <img
                src={assets.hero}
                alt="晚声饮料品牌主视觉"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-0 w-[58%] border border-ink bg-paper p-2 shadow-[6px_6px_0_#181313] md:bottom-10">
              <img
                src={assets.grape}
                alt="晚声雨夜葡萄饮料"
                className="aspect-[4/5] w-full bg-white object-contain"
              />
              <div className="flex items-center justify-between border-t border-ink pt-2 font-condensed text-[0.68rem] font-black uppercase tracking-[0.14em]">
                <span>250ML CAN</span>
                <span>LOW SUGAR</span>
              </div>
            </div>
            <div className="absolute right-2 top-8 border border-paper bg-rust px-4 py-3 font-condensed text-sm font-black uppercase tracking-[0.2em] text-paper md:right-10">
              NIGHT SIP
            </div>
          </motion.div>
        </div>

        <div className="-mx-4 grid grid-cols-2 border-t border-ink bg-olive text-paper md:-mx-6 md:grid-cols-4">
          {["低糖气泡", "夜间风味", "真实罐身", "独立饮料"].map((item) => (
            <div
              key={item}
              className="border-r border-paper/35 px-4 py-5 font-serifPoster text-2xl font-bold md:px-6 md:text-3xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <motion.section
      id="flavors"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-paper px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1540px]">
        <motion.div
          variants={reveal}
          className="mb-9 flex flex-col justify-between gap-4 border-b border-ink pb-5 md:flex-row md:items-end"
        >
          <h2
            id="products"
            className="font-serifPoster text-[clamp(3rem,7vw,6.4rem)] font-black leading-none"
          >
            三种夜间风味
          </h2>
          <p className="max-w-md text-lg font-semibold leading-snug">
            三款口味都从夜晚出发，最后还是落到一罐饮料上：入口要清爽，甜度要收住，罐身要一眼分清。
          </p>
        </motion.div>

        <div className="grid gap-px bg-ink md:grid-cols-3">
          {flavors.map(({ title, label, text, image, icon: Icon, hover }) => (
            <motion.article
              variants={reveal}
              key={title}
              className={`group bg-paper p-4 transition-colors duration-300 ${hover} md:p-5`}
            >
              <div className="mb-5 flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-serifPoster text-[clamp(2.25rem,4vw,4rem)] font-black leading-none">
                    {title}
                  </h3>
                  <p className="mt-3 font-condensed text-xs font-black uppercase tracking-[0.16em]">
                    {label}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-current">
                  <Icon size={22} />
                </span>
              </div>
              <div className="overflow-hidden border border-current bg-white">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[5/4] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 min-h-16 text-lg font-semibold leading-snug">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Catalog() {
  return (
    <motion.section
      id="catalog"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="border-y border-ink bg-amber px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1540px]">
        <motion.div
          variants={reveal}
          className="mb-8 grid gap-4 md:grid-cols-[1fr_0.78fr] md:items-end"
        >
          <h2 className="font-serifPoster text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-none">
            产品目录
          </h2>
          <p className="border border-ink bg-paper p-4 text-xl font-semibold leading-tight">
            这里按货架来排：正视图、口味名、容量和系列标签先讲清楚，故事放后面。
          </p>
        </motion.div>

        <div className="grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((item, index) => (
            <motion.article
              variants={reveal}
              key={`${item.name}-${item.type}`}
              className="group bg-paper p-3"
            >
              <div className="relative overflow-hidden border border-ink bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] border-x border-b border-ink">
                <div className="border-r border-ink px-3 py-4 font-condensed text-2xl font-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-3 py-3">
                  <h3 className="font-serifPoster text-3xl font-black leading-none">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between gap-4 font-condensed text-xs font-black uppercase tracking-[0.16em]">
                    <span>{item.type}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FlavorBars({ color }) {
  const bars = useMemo(() => Array.from({ length: 58 }, (_, index) => index), []);

  return (
    <div className="flex h-44 items-center gap-1 border border-paper/40 bg-paper/5 px-4 md:h-64 md:px-6">
      {bars.map((bar) => (
        <motion.span
          key={bar}
          className="block w-full max-w-[9px]"
          style={{ backgroundColor: color }}
          animate={{
            height: [
              `${18 + ((bar * 7) % 44)}%`,
              `${34 + ((bar * 11) % 50)}%`,
              `${18 + ((bar * 7) % 44)}%`,
            ],
            opacity: [0.45, 0.95, 0.45],
          }}
          transition={{
            duration: 4.8 + (bar % 7) * 0.24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.035,
          }}
        />
      ))}
    </div>
  );
}

function TasteExperience() {
  const [active, setActive] = useState(0);
  const current = tasteOptions[active];

  return (
    <motion.section
      id="taste"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-ink px-4 py-16 text-paper md:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={reveal}
          className="flex flex-col justify-between border-y border-paper/35 py-6"
        >
          <div>
            <p className="mb-5 font-condensed text-xs font-black uppercase tracking-[0.26em] text-amber">
              Flavor Selector
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
              >
                <h2 className="font-serifPoster text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-none">
                  {current.title}
                </h2>
                <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-paper/82">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 grid gap-3">
            {tasteOptions.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => setActive(index)}
                className={`flex items-center justify-between border px-4 py-4 text-left text-xl font-bold transition-colors ${
                  active === index
                    ? "border-paper bg-paper text-ink"
                    : "border-paper/45 hover:bg-paper/10"
                }`}
              >
                {item.name}
                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={reveal} className="grid content-center gap-5">
          <FlavorBars color={current.color} />
          <div className="grid grid-cols-3 gap-px bg-paper/40 text-center font-condensed text-xs font-black uppercase tracking-[0.14em]">
            {["LOW SUGAR", "LIGHT SPARKLE", "250ML CAN"].map((item) => (
              <span key={item} className="bg-ink px-2 py-4">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section
      id="about"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="bg-paper px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-[1540px] gap-8 md:grid-cols-[1fr_0.72fr]">
        <motion.div variants={reveal} className="border-y border-ink py-6 md:py-8">
          <p className="font-serifPoster text-[clamp(2.15rem,4.8vw,5.4rem)] font-black leading-[1.05]">
            晚声想做得安静一点。少一点糖水的热闹，多一点夜里能慢慢喝完的酸、甜和细气泡。
          </p>
          <div className="mt-8 grid gap-px bg-ink md:grid-cols-3">
            {["低糖", "轻气泡", "夜间感"].map((item) => (
              <span
                key={item}
                className="bg-paper px-4 py-5 font-serifPoster text-3xl font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.figure
          variants={reveal}
          className="relative border border-ink bg-rust p-3 text-paper"
        >
          <div className="flex aspect-[3/4] flex-col items-center justify-center border border-paper/45 bg-paper p-8 text-ink">
            <img
              src={assets.logo}
              alt="晚声品牌标识"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-paper/60 pt-3 font-condensed text-xs font-black uppercase tracking-[0.15em]">
            <span>Wansheng Official Mark</span>
            <span>Front Use Only</span>
          </figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-paper/25 bg-rust px-4 py-10 text-paper md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-[1540px]">
        <div className="border-b border-paper/45 pb-8">
          <div className="font-serifPoster text-[clamp(5rem,18vw,16rem)] font-black leading-[0.85]">
            晚声
          </div>
        </div>
        <div className="grid gap-6 pt-8 font-semibold md:grid-cols-4">
          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.22em] text-paper/65">
              Mail
            </p>
            <a
              href="mailto:drink@wansheng.cn"
              className="mt-2 block text-xl hover:underline"
            >
              drink@wansheng.cn
            </a>
          </div>
          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.22em] text-paper/65">
              Channel
            </p>
            <p className="mt-2 text-xl">WeChat / RED / Pop-up Store</p>
          </div>
          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.22em] text-paper/65">
              City
            </p>
            <p className="mt-2 text-xl">Shanghai / Chengdu / Online</p>
          </div>
          <div>
            <p className="font-condensed text-xs uppercase tracking-[0.22em] text-paper/65">
              Copyright
            </p>
            <p className="mt-2 text-xl">© 2026 晚声 Wansheng Drink</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-paper font-sansClean text-ink">
      <Header />
      <Hero />
      <Flavors />
      <Catalog />
      <TasteExperience />
      <About />
      <Footer />
    </main>
  );
}
