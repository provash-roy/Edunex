import { useEffect } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Camera,
  Code,
  Database,
  GraduationCap,
  Home,
  Infinity,
  LayoutGrid,
  MessageSquare,
  MonitorPlay,
  PenTool,
  Play,
  Rocket,
  Star,
  StarHalf,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { FallbackComponent } from "./CustomComponents";

export default function App() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur bg-neutral-950/95 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-200 text-neutral-900 flex justify-center items-center">
                  <GraduationCap className="size-5" />
                </div>
                <span className="font-bold text-neutral-50 text-lg leading-7 tracking-tight">
                  Learnova
                </span>
              </div>
              <nav className="hidden items-center gap-6">
                <a
                  className="font-semibold text-neutral-50 text-sm leading-5 border-neutral-200 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                  href="#"
                >
                  <Home className="size-4" />
                  Home
                </a>
                <a
                  className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                  href="#"
                >
                  <BookOpen className="size-4" />
                  Courses
                </a>
                <a
                  className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                  href="#"
                >
                  <BarChart3 className="size-4" />
                  My Learning
                </a>
                <a
                  className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                  href="#"
                >
                  <MessageSquare className="size-4" />
                  Messages
                </a>
                <a
                  className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                  href="#"
                >
                  <User className="size-4" />
                  Account
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="font-medium text-neutral-50 text-sm leading-5 px-4 h-9"
                variant="ghost"
              >
                Log in
              </Button>
              <Button className="font-medium bg-neutral-200 text-neutral-900 text-sm leading-5 px-4 h-9">
                Sign up
              </Button>
            </div>
          </div>
        </header>
        <main className="max-w-[1140px] mx-auto px-8">
          <section className="grid grid-cols-1 py-12 items-center gap-8">
            <div className="flex flex-col gap-6">
              <Badge className="font-medium rounded-full bg-neutral-800 text-neutral-50 text-xs leading-4 px-3 py-1 w-fit">
                Over 12,000 courses available
              </Badge>
              <h1 className="max-w-2xl font-bold text-neutral-50 text-5xl leading-12 tracking-tight">
                Learn skills that move your career forward
              </h1>
              <p className="max-w-md text-[#a1a1a1] text-base leading-6">
                Master in-demand skills with expert-led courses, hands-on
                projects, and a community of millions of learners. Start
                learning today, at your own pace.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-neutral-200 text-neutral-900 px-6 gap-2 h-11">
                  <Play className="size-4" />
                  Start learning free
                </Button>
                <Button
                  className="bg-transparent text-neutral-50 border-white/10 border-0 border-solid px-6 gap-2 h-11"
                  variant="outline"
                >
                  <LayoutGrid className="size-4" />
                  Browse catalog
                </Button>
              </div>
              <div className="flex pt-2 items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-bold text-neutral-50 text-2xl leading-8">
                    50M+
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Learners
                  </span>
                </div>
                <Separator
                  className="bg-white/10 h-10"
                  orientation="vertical"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-neutral-50 text-2xl leading-8">
                    12K+
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Courses
                  </span>
                </div>
                <Separator
                  className="bg-white/10 h-10"
                  orientation="vertical"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-1">
                    4.8
                    <Star className="size-4 fill-chart3 text-[#fe9a00]" />
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Avg rating
                  </span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl bg-neutral-900 border-white/10 border-1 border-solid overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBsYXB0b3AlMjBzdHVkeXxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Student learning online"
                className="object-cover w-full h-90"
                data-photoid="mfB1B1s4sMc"
                data-authorname="Christin Hume"
                data-authorurl="https://unsplash.com/@christinhumephoto"
                data-blurhash="LWFh^x9FD%kD~qV?MxbHS5t7V@n~"
              />
              <div className="backdrop-blur rounded-xl bg-neutral-950/90 border-white/10 border-1 border-solid flex absolute left-4 bottom-4 p-3 items-center gap-3">
                <div className="size-10 rounded-lg bg-neutral-200 text-neutral-900 flex justify-center items-center">
                  <Award className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-50 text-sm leading-5">
                    Certified courses
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Earn shareable certificates
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="border-y border-white/10 border-0 border-solid flex py-8 flex-col items-center gap-2">
            <span className="font-medium text-[#a1a1a1] text-sm leading-5">
              Trusted by teams at leading companies
            </span>
            <div className="text-[#a1a1a1] flex pt-2 flex-wrap justify-center items-center gap-8">
              <span className="font-bold text-lg leading-7">Acme</span>
              <span className="font-bold text-lg leading-7">Globex</span>
              <span className="font-bold text-lg leading-7">Initech</span>
              <span className="font-bold text-lg leading-7">Umbrella</span>
              <span className="font-bold text-lg leading-7">Soylent</span>
              <span className="font-bold text-lg leading-7">Hooli</span>
            </div>
          </section>
          <section className="flex py-12 flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
                  Popular courses
                </h2>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  Hand-picked courses loved by our community
                </p>
              </div>
              <Button
                className="font-medium text-neutral-50 text-sm leading-5 gap-1"
                variant="ghost"
              >
                View all
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGNvdXJzZXxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Web development"
                    className="object-cover w-full h-36"
                    data-photoid="4hbJ-eymZ1o"
                    data-authorname="Florian Olivo"
                    data-authorurl="https://unsplash.com/@florianolv"
                    data-blurhash="L76kVU-YRjODiYrpson+R:W=WoWV"
                  />
                  <Badge className="rounded-full bg-neutral-800 text-neutral-50 absolute left-3 top-3">
                    Bestseller
                  </Badge>
                </div>
                <div className="flex p-4 flex-col gap-3">
                  <span className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Development
                  </span>
                  <h3 className="font-semibold text-neutral-50 text-base leading-6">
                    The Complete Web Developer Bootcamp
                  </h3>
                  <div className="text-sm leading-5 flex items-center gap-2">
                    <span className="font-semibold text-[#fe9a00]">4.9</span>
                    <div className="text-[#fe9a00] flex items-center gap-0.5">
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                    </div>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      (8,420)
                    </span>
                  </div>
                  <div className="flex pt-1 justify-between items-center">
                    <span className="font-bold text-neutral-50 text-lg leading-7">
                      $59.99
                    </span>
                    <span className="line-through text-[#a1a1a1] text-xs leading-4">
                      $129.99
                    </span>
                  </div>
                </div>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Data science"
                    className="object-cover w-full h-36"
                    data-photoid="JKUTrJ4vK00"
                    data-authorname="Luke Chesser"
                    data-authorurl="https://unsplash.com/@lukechesser"
                    data-blurhash="LUDvl^00-;9Z~qM{IUt7_2M_Ios:"
                  />
                  <Badge className="rounded-full bg-neutral-800 text-neutral-50 absolute left-3 top-3">
                    New
                  </Badge>
                </div>
                <div className="flex p-4 flex-col gap-3">
                  <span className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Data Science
                  </span>
                  <h3 className="font-semibold text-neutral-50 text-base leading-6">{`Data Science & Machine Learning A-Z`}</h3>
                  <div className="text-sm leading-5 flex items-center gap-2">
                    <span className="font-semibold text-[#fe9a00]">4.7</span>
                    <div className="text-[#fe9a00] flex items-center gap-0.5">
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <StarHalf className="size-3 fill-chart3" />
                    </div>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      (5,210)
                    </span>
                  </div>
                  <div className="flex pt-1 justify-between items-center">
                    <span className="font-bold text-neutral-50 text-lg leading-7">
                      $74.99
                    </span>
                    <span className="line-through text-[#a1a1a1] text-xs leading-4">
                      $149.99
                    </span>
                  </div>
                </div>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXwwfHx8MTc4MTI2MDA4OXww&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Graphic design"
                    className="object-cover w-full h-36"
                    data-photoid="ZEtE38ybfao"
                    data-authorname="Denise Jans"
                    data-authorurl="https://unsplash.com/@dmjdenise"
                    data-blurhash="LPH2QK%N~qx^o#kD%Lo#9E%MM{oe"
                  />
                </div>
                <div className="flex p-4 flex-col gap-3">
                  <span className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Design
                  </span>
                  <h3 className="font-semibold text-neutral-50 text-base leading-6">
                    UI/UX Design Masterclass with Figma
                  </h3>
                  <div className="text-sm leading-5 flex items-center gap-2">
                    <span className="font-semibold text-[#fe9a00]">4.8</span>
                    <div className="text-[#fe9a00] flex items-center gap-0.5">
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                    </div>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      (3,880)
                    </span>
                  </div>
                  <div className="flex pt-1 justify-between items-center">
                    <span className="font-bold text-neutral-50 text-lg leading-7">
                      $49.99
                    </span>
                    <span className="line-through text-[#a1a1a1] text-xs leading-4">
                      $99.99
                    </span>
                  </div>
                </div>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfDB8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Marketing"
                    className="object-cover w-full h-36"
                    data-photoid="KdeqA3aTnBY"
                    data-authorname="Dylan Gillis"
                    data-authorurl="https://unsplash.com/@mainermedia"
                    data-blurhash="LLH2K8Dh0L%h-:XUem%2E2r;xFW="
                  />
                  <Badge className="rounded-full bg-neutral-800 text-neutral-50 absolute left-3 top-3">
                    Bestseller
                  </Badge>
                </div>
                <div className="flex p-4 flex-col gap-3">
                  <span className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Marketing
                  </span>
                  <h3 className="font-semibold text-neutral-50 text-base leading-6">
                    Digital Marketing Strategy Complete Guide
                  </h3>
                  <div className="text-sm leading-5 flex items-center gap-2">
                    <span className="font-semibold text-[#fe9a00]">4.6</span>
                    <div className="text-[#fe9a00] flex items-center gap-0.5">
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <Star className="size-3 fill-chart3" />
                      <StarHalf className="size-3 fill-chart3" />
                    </div>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      (6,140)
                    </span>
                  </div>
                  <div className="flex pt-1 justify-between items-center">
                    <span className="font-bold text-neutral-50 text-lg leading-7">
                      $54.99
                    </span>
                    <span className="line-through text-[#a1a1a1] text-xs leading-4">
                      $119.99
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
          <section className="flex py-12 flex-col gap-6">
            <div className="text-center flex flex-col items-center gap-2">
              <h2 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
                Explore top categories
              </h2>
              <p className="max-w-lg text-[#a1a1a1] text-sm leading-5">
                Find the right path for your goals across our most popular
                learning categories
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <Code className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Development
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  2,400 courses
                </span>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <PenTool className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Design
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  1,180 courses
                </span>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <TrendingUp className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Marketing
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  960 courses
                </span>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <Database className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Data Science
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  740 courses
                </span>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <Briefcase className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Business
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  1,520 courses
                </span>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid flex p-6 flex-col items-center gap-2">
                <div className="size-12 rounded-xl bg-neutral-800 text-neutral-50 flex justify-center items-center">
                  <Camera className="size-6" />
                </div>
                <span className="font-semibold text-neutral-50 text-sm leading-5">
                  Photography
                </span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  430 courses
                </span>
              </Card>
            </div>
          </section>
          <section className="grid grid-cols-1 rounded-2xl bg-neutral-900 border-white/10 border-1 border-solid p-12 gap-8">
            <div className="flex flex-col items-start gap-3">
              <div className="size-11 rounded-xl bg-neutral-200 text-neutral-900 flex justify-center items-center">
                <MonitorPlay className="size-5" />
              </div>
              <h3 className="font-semibold text-neutral-50 text-lg leading-7">
                Learn by doing
              </h3>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Interactive lessons and real-world projects help you build
                skills you can actually use on the job.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="size-11 rounded-xl bg-neutral-200 text-neutral-900 flex justify-center items-center">
                <Users className="size-5" />
              </div>
              <h3 className="font-semibold text-neutral-50 text-lg leading-7">
                Expert instructors
              </h3>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Learn from industry leaders and practitioners who teach the
                skills they use every single day.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="size-11 rounded-xl bg-neutral-200 text-neutral-900 flex justify-center items-center">
                <Infinity className="size-5" />
              </div>
              <h3 className="font-semibold text-neutral-50 text-lg leading-7">
                Lifetime access
              </h3>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Get unlimited access to your courses, including all future
                updates, anytime and anywhere.
              </p>
            </div>
          </section>
          <section className="flex py-12 flex-col gap-6">
            <div className="text-center flex flex-col items-center gap-2">
              <h2 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
                Loved by learners worldwide
              </h2>
              <p className="max-w-lg text-[#a1a1a1] text-sm leading-5">
                Join millions who transformed their careers with Learnova
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#fe9a00] flex items-center gap-1">
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                  </div>
                  <p className="text-neutral-50 text-sm leading-5">
                    "The courses are incredibly well structured. I landed a
                    developer role just three months after finishing the
                    bootcamp."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1710777932534-2a58edf3603d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfDJ8fHwxNzgxMjYwMDg5fDA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Sarah"
                        data-photoid="21ckukPU3qA"
                        data-authorname="Abenezer Shewaga"
                        data-authorurl="https://unsplash.com/@abenezer_shewaga"
                        data-blurhash="LmMr3UNa}kt7;xW=N{WBxFn$NdWr"
                      />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral-50 text-sm leading-5">
                        Sarah Lin
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Frontend Developer
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#fe9a00] flex items-center gap-1">
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                  </div>
                  <p className="text-neutral-50 text-sm leading-5">
                    "Flexible learning that fits my schedule. The hands-on
                    projects made all the difference in my understanding."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8Mnx8fDE3ODEwOTk5NjB8MA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="Marcus"
                        data-photoid="n4KewLKFOZw"
                        data-authorname="Imansyah Muhamad Putera"
                        data-authorurl="https://unsplash.com/@imansyahmp"
                        data-blurhash="LOE{FM_NK6r=kqt7$*WXE2RjwvWV"
                      />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral-50 text-sm leading-5">
                        Marcus Reed
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Data Analyst
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#fe9a00] flex items-center gap-1">
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <Star className="size-4 fill-chart3" />
                    <StarHalf className="size-4 fill-chart3" />
                  </div>
                  <p className="text-neutral-50 text-sm leading-5">
                    "As an instructor, the platform tools are fantastic. I have
                    reached thousands of students around the globe."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hlciUyMHBvcnRyYWl0fGVufDF8Mnx8fDE3ODEyNjAwODl8MA&ixlib=rb-4.1.0&q=80&w=400"
                        alt="David"
                        data-photoid="Aj4DeR0H6RQ"
                        data-authorname="Patrick Daley"
                        data-authorurl="https://unsplash.com/@edgemodelsandtalent"
                        data-blurhash="LB8zGg-p0zM|X9WVIoNGE2RkoKf6"
                      />
                      <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral-50 text-sm leading-5">
                        David Kim
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Senior Instructor
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="text-center rounded-2xl bg-neutral-900 text-neutral-50 border-white/10 border-1 border-solid flex my-12 p-12 flex-col items-center gap-6">
            <Rocket className="size-10 text-neutral-200" />
            <h2 className="max-w-xl font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
              Start learning today and level up your skills
            </h2>
            <p className="max-w-lg text-[#a1a1a1] text-sm leading-5">
              Join over 50 million learners. Get unlimited access to thousands
              of courses with a 7-day free trial.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button className="bg-neutral-200 text-neutral-900 px-6 gap-2 h-11">
                Get started free
                <ArrowRight className="size-4" />
              </Button>
              <Button
                className="bg-transparent text-neutral-50 border-white/10 border-0 border-solid px-6 h-11"
                variant="outline"
              >
                View pricing
              </Button>
            </div>
          </section>
        </main>
        <footer className="bg-neutral-950 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
          <div className="grid max-w-[1140px] grid-cols-2 mx-auto px-8 py-12 gap-8">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-200 text-neutral-900 flex justify-center items-center">
                  <GraduationCap className="size-5" />
                </div>
                <span className="font-bold text-neutral-50 text-lg leading-7 tracking-tight">
                  Learnova
                </span>
              </div>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Empowering millions to learn the skills they need to succeed.
              </p>
              <div className="flex items-center gap-3">
                <Button
                  className="size-9 bg-transparent text-neutral-50 border-white/10 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <FallbackComponent className="size-4" />
                </Button>
                <Button
                  className="size-9 bg-transparent text-neutral-50 border-white/10 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <FallbackComponent className="size-4" />
                </Button>
                <Button
                  className="size-9 bg-transparent text-neutral-50 border-white/10 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <FallbackComponent className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-neutral-50 text-sm leading-5">
                Courses
              </span>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Development
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Design
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Marketing
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Business
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-neutral-50 text-sm leading-5">
                Company
              </span>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                About
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Careers
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Blog
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Press
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-neutral-50 text-sm leading-5">
                Support
              </span>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Help Center
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Contact
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                FAQ
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Community
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-neutral-50 text-sm leading-5">
                Legal
              </span>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Privacy
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Terms
              </a>
              <a className="text-[#a1a1a1] text-sm leading-5" href="#">
                Cookies
              </a>
            </div>
          </div>
          <Separator className="bg-white/10" />
          <div className="max-w-[1140px] flex mx-auto px-8 py-6 justify-between items-center">
            <span className="text-[#a1a1a1] text-sm leading-5">
              © 2025 Learnova, Inc. All rights reserved.
            </span>
            <span className="text-[#a1a1a1] text-sm leading-5">
              Made with care for lifelong learners
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
