/**
 * speakingTopics.ts
 *
 * Topic bank for the Writing & Speaking Practice feature.
 * Levels follow CEFR: A1, A2, B1, B2, C1.
 * Counts: A1=10, A2=10, B1=20, B2=20, C1=10 (70 total)
 *
 * Each topic gives the learner a real-world prompt. The learner can:
 *  - Write a response (typed text), and/or
 *  - Speak a response (record or upload audio, which is transcribed)
 * AI then evaluates whichever submission(s) exist and returns a score + feedback.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Users, ShoppingCart, Home, Utensils, Cat, Sun, Clock, MapPin, Smile, Backpack,
  Coffee, Phone, Gift, Shirt, Bus, Calendar, Cloud, Music,
  Plane, Briefcase, Stethoscope, GraduationCap, Heart, Building2, Wallet, Newspaper,
  Wifi, Recycle, Hammer, Camera, Dumbbell, BookOpen, PartyPopper, TreePine, Banknote, Laptop,
  MessageCircle, TrendingUp, Globe, Scale, Leaf, Brain, Landmark, Megaphone, Handshake, Lightbulb,
  Users2, ShieldAlert, LineChart, Rocket, Vote, Palette, Microscope, Network,
  Library, FlaskConical, Scroll, Gavel, Infinity as InfinityIcon, Sparkles, Telescope, Layers, Compass,
} from 'lucide-react';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface SpeakingTopic {
  id: string;
  level: CEFRLevel;
  title: string;
  area: string; // broad subject area, e.g. "Daily Life", "Travel"
  icon: LucideIcon;
  color: string; // tailwind bg/text classes for the icon chip
  description: string; // shown to learner before they start
  writingPrompt: string; // instruction shown on the writing tab
  speakingPrompt: string; // instruction shown on the speaking tab
  minWords: number; // suggested minimum length for writing
  targetSeconds: number; // suggested minimum speaking duration
}

export const LEVEL_INFO: { level: CEFRLevel; label: string; color: string; badge: string; desc: string }[] = [
  { level: 'A1', label: 'Beginner',      color: 'emerald', badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', desc: 'Basic words & simple sentences' },
  { level: 'A2', label: 'Elementary',    color: 'teal',    badge: 'bg-teal-100 text-teal-700 border-teal-200',          desc: 'Everyday topics & short exchanges' },
  { level: 'B1', label: 'Intermediate',  color: 'blue',    badge: 'bg-blue-100 text-blue-700 border-blue-200',          desc: 'Connected ideas on familiar topics' },
  { level: 'B2', label: 'Upper-Int.',    color: 'indigo',  badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',    desc: 'Clear, detailed views on complex topics' },
  { level: 'C1', label: 'Advanced',      color: 'purple',  badge: 'bg-purple-100 text-purple-700 border-purple-200',    desc: 'Fluent, well-structured, nuanced language' },
];

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  // ───────────────────────── A1 — 10 topics ─────────────────────────
  {
    id: 'a1-intro', level: 'A1', title: 'Introduce Yourself', area: 'Personal Info', icon: Users, color: 'bg-emerald-50 text-emerald-600',
    description: 'Tell us who you are in a few simple sentences.',
    writingPrompt: 'Write 3-5 simple sentences about yourself: your name, age, where you are from, and one thing you like.',
    speakingPrompt: 'Speak for about 20-30 seconds. Say your name, where you are from, and one thing you like.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-family', level: 'A1', title: 'My Family', area: 'Family', icon: Home, color: 'bg-emerald-50 text-emerald-600',
    description: 'Describe the people in your family.',
    writingPrompt: 'Write about your family. How many people? What are their names? What do they do?',
    speakingPrompt: 'Talk about your family for 20-30 seconds. Mention at least two family members.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-daily-routine', level: 'A1', title: 'My Daily Routine', area: 'Daily Life', icon: Clock, color: 'bg-emerald-50 text-emerald-600',
    description: 'Talk about what you do every day.',
    writingPrompt: 'Write 4-6 simple sentences describing your typical day, from morning to night.',
    speakingPrompt: 'Describe your daily routine for 30 seconds. Use simple present tense (I wake up, I eat...).',
    minWords: 25, targetSeconds: 25,
  },
  {
    id: 'a1-food', level: 'A1', title: 'My Favorite Food', area: 'Food & Drink', icon: Utensils, color: 'bg-emerald-50 text-emerald-600',
    description: 'Talk about food you like and dislike.',
    writingPrompt: 'Write about your favorite food. What is it? Why do you like it? When do you eat it?',
    speakingPrompt: 'Speak for 20-30 seconds about your favorite food and why you like it.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-pets-animals', level: 'A1', title: 'Pets & Animals', area: 'Animals', icon: Cat, color: 'bg-emerald-50 text-emerald-600',
    description: 'Describe an animal or pet you like.',
    writingPrompt: 'Write about an animal you like or a pet you have. Describe what it looks like and what it does.',
    speakingPrompt: 'Talk for 20-30 seconds about an animal or pet you like.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-weather', level: 'A1', title: 'The Weather Today', area: 'Weather', icon: Sun, color: 'bg-emerald-50 text-emerald-600',
    description: 'Describe today\'s weather and what you wear.',
    writingPrompt: 'Write 3-4 sentences about the weather today and what clothes you wear in this weather.',
    speakingPrompt: 'Speak for 20 seconds about the weather today.',
    minWords: 15, targetSeconds: 15,
  },
  {
    id: 'a1-shopping', level: 'A1', title: 'At the Shop', area: 'Shopping', icon: ShoppingCart, color: 'bg-emerald-50 text-emerald-600',
    description: 'Talk about buying simple things.',
    writingPrompt: 'Write a short dialogue or description: what do you buy at a shop, and how much does it cost?',
    speakingPrompt: 'Imagine you are at a shop. Speak for 20-30 seconds asking for and buying something.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-house-rooms', level: 'A1', title: 'My House', area: 'Home', icon: Home, color: 'bg-emerald-50 text-emerald-600',
    description: 'Describe the rooms in your house.',
    writingPrompt: 'Write about your house or apartment. What rooms does it have? What is your favorite room?',
    speakingPrompt: 'Describe your house for 30 seconds: the rooms and your favorite place in it.',
    minWords: 20, targetSeconds: 25,
  },
  {
    id: 'a1-hobbies', level: 'A1', title: 'My Free Time', area: 'Hobbies', icon: Smile, color: 'bg-emerald-50 text-emerald-600',
    description: 'Talk about what you do for fun.',
    writingPrompt: 'Write 3-5 sentences about what you do in your free time.',
    speakingPrompt: 'Speak for 20-30 seconds about your hobbies and free time activities.',
    minWords: 20, targetSeconds: 20,
  },
  {
    id: 'a1-school', level: 'A1', title: 'My School or Job', area: 'Education', icon: Backpack, color: 'bg-emerald-50 text-emerald-600',
    description: 'Describe your school or workplace.',
    writingPrompt: 'Write about your school or job. What do you study or do? Who do you see there?',
    speakingPrompt: 'Talk for 30 seconds about your school or your job.',
    minWords: 20, targetSeconds: 25,
  },

  // ───────────────────────── A2 — 10 topics ─────────────────────────
  {
    id: 'a2-cafe-order', level: 'A2', title: 'Ordering at a Café', area: 'Food & Drink', icon: Coffee, color: 'bg-teal-50 text-teal-600',
    description: 'Practice ordering food and drinks politely.',
    writingPrompt: 'Write a short conversation (5-8 lines) between you and a waiter ordering food and drinks.',
    speakingPrompt: 'Role-play ordering at a café for 30-40 seconds. Use polite phrases like "Could I have..."',
    minWords: 35, targetSeconds: 30,
  },
  {
    id: 'a2-directions', level: 'A2', title: 'Asking for Directions', area: 'Travel', icon: MapPin, color: 'bg-teal-50 text-teal-600',
    description: 'Ask for and give simple directions.',
    writingPrompt: 'Write directions from your house to a nearby place (shop, school, park).',
    speakingPrompt: 'Speak for 30-40 seconds giving directions from one place to another.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-transport', level: 'A2', title: 'Getting Around Town', area: 'Travel', icon: Bus, color: 'bg-teal-50 text-teal-600',
    description: 'Describe how you travel around your city.',
    writingPrompt: 'Write about how you usually travel (bus, car, bike, walk) and why you choose this way.',
    speakingPrompt: 'Talk for 30 seconds about how you get around your town or city.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-phone-call', level: 'A2', title: 'Making a Phone Call', area: 'Communication', icon: Phone, color: 'bg-teal-50 text-teal-600',
    description: 'Practice a simple phone conversation.',
    writingPrompt: 'Write a short phone conversation making an appointment or asking for information.',
    speakingPrompt: 'Role-play a phone call for 30-40 seconds (e.g. booking a table or asking opening hours).',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-clothes-shopping', level: 'A2', title: 'Buying Clothes', area: 'Shopping', icon: Shirt, color: 'bg-teal-50 text-teal-600',
    description: 'Describe shopping for clothes.',
    writingPrompt: 'Write about a time you bought clothes. What did you buy? Did you try it on? How much was it?',
    speakingPrompt: 'Talk for 30-40 seconds about shopping for clothes — sizes, colors, and prices.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-birthday-party', level: 'A2', title: 'A Birthday Party', area: 'Celebrations', icon: Gift, color: 'bg-teal-50 text-teal-600',
    description: 'Describe a birthday or celebration.',
    writingPrompt: 'Write about a birthday party you remember. Who was there? What did you do?',
    speakingPrompt: 'Speak for 30-40 seconds describing a birthday party or celebration.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-weekend-plans', level: 'A2', title: 'Weekend Plans', area: 'Daily Life', icon: Calendar, color: 'bg-teal-50 text-teal-600',
    description: 'Talk about your plans for the weekend.',
    writingPrompt: 'Write about your plans for next weekend. What will you do? Who will you see?',
    speakingPrompt: 'Speak for 30 seconds about your weekend plans, using "going to" or "will".',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-weather-seasons', level: 'A2', title: 'Seasons & Weather', area: 'Weather', icon: Cloud, color: 'bg-teal-50 text-teal-600',
    description: 'Compare the seasons in your country.',
    writingPrompt: 'Write about the different seasons in your country and which one you like best, and why.',
    speakingPrompt: 'Talk for 30-40 seconds comparing two seasons and saying which you prefer.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-music-movies', level: 'A2', title: 'Music & Movies I Like', area: 'Entertainment', icon: Music, color: 'bg-teal-50 text-teal-600',
    description: 'Describe your favorite music or films.',
    writingPrompt: 'Write about a song, singer, or movie you like. Why do you like it?',
    speakingPrompt: 'Speak for 30-40 seconds about music or a movie you enjoy.',
    minWords: 30, targetSeconds: 30,
  },
  {
    id: 'a2-describe-friend', level: 'A2', title: 'Describing a Friend', area: 'Relationships', icon: Users, color: 'bg-teal-50 text-teal-600',
    description: 'Describe a friend\'s appearance and personality.',
    writingPrompt: 'Write a description of a close friend: what they look like and what their personality is like.',
    speakingPrompt: 'Talk for 30-40 seconds describing a friend\'s appearance and character.',
    minWords: 30, targetSeconds: 30,
  },

  // ───────────────────────── B1 — 20 topics ─────────────────────────
  {
    id: 'b1-travel-airport', level: 'B1', title: 'Travel & Airport', area: 'Travel', icon: Plane, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about flying and airport situations.',
    writingPrompt: 'Write about a trip you took by plane. Describe check-in, the flight, and arriving.',
    speakingPrompt: 'Speak for 45-60 seconds about a trip you took or would like to take by plane.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-workplace', level: 'B1', title: 'At the Office', area: 'Work', icon: Briefcase, color: 'bg-blue-50 text-blue-600',
    description: 'Describe your work and a typical task.',
    writingPrompt: 'Write about your job or a job you would like. Describe a typical task or meeting.',
    speakingPrompt: 'Talk for 45-60 seconds describing your job, or a job you are interested in.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-health-doctor', level: 'B1', title: 'Health & Doctor Visits', area: 'Health', icon: Stethoscope, color: 'bg-blue-50 text-blue-600',
    description: 'Describe symptoms and a doctor visit.',
    writingPrompt: 'Write about a time you were sick or visited a doctor. What happened and how did you feel?',
    speakingPrompt: 'Speak for 45 seconds describing symptoms and what advice a doctor gave you.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-education-goals', level: 'B1', title: 'Education & Learning Goals', area: 'Education', icon: GraduationCap, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about your studies and goals.',
    writingPrompt: 'Write about your education so far and what you hope to learn or achieve next.',
    speakingPrompt: 'Talk for 45-60 seconds about your studies and your future learning goals.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-home-family-life', level: 'B1', title: 'Home & Family Life', area: 'Family', icon: Home, color: 'bg-blue-50 text-blue-600',
    description: 'Describe your home life and routines.',
    writingPrompt: 'Write about your home and family life: routines, responsibilities, and relationships.',
    speakingPrompt: 'Speak for 45-60 seconds about your home and family routines.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-relationships-emotions', level: 'B1', title: 'Relationships & Feelings', area: 'Relationships', icon: Heart, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about feelings and relationships.',
    writingPrompt: 'Write about how you maintain a good relationship with a friend or family member.',
    speakingPrompt: 'Speak for 45 seconds about what makes a good friendship, with an example.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-city-vs-countryside', level: 'B1', title: 'City vs Countryside Living', area: 'Lifestyle', icon: Building2, color: 'bg-blue-50 text-blue-600',
    description: 'Compare living in a city and the countryside.',
    writingPrompt: 'Write a comparison of living in a city versus living in the countryside. Which do you prefer?',
    speakingPrompt: 'Speak for 45-60 seconds comparing city and countryside living.',
    minWords: 60, targetSeconds: 45,
  },
  {
    id: 'b1-money-budgeting', level: 'B1', title: 'Money & Budgeting', area: 'Finance', icon: Wallet, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about saving and spending money.',
    writingPrompt: 'Write about how you manage your money. Do you save? What do you spend on?',
    speakingPrompt: 'Speak for 45 seconds about your approach to saving or spending money.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-news-current-events', level: 'B1', title: 'News & Current Events', area: 'Media', icon: Newspaper, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about a recent news story.',
    writingPrompt: 'Write about a news story you heard recently. What happened and why is it important?',
    speakingPrompt: 'Speak for 45-60 seconds summarizing a recent news story and your opinion on it.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-technology-daily-life', level: 'B1', title: 'Technology in Daily Life', area: 'Technology', icon: Wifi, color: 'bg-blue-50 text-blue-600',
    description: 'Describe how technology helps you.',
    writingPrompt: 'Write about a piece of technology (phone, app, device) that you use every day and why it helps you.',
    speakingPrompt: 'Speak for 45 seconds about how technology affects your daily life.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-environment-recycling', level: 'B1', title: 'Environment & Recycling', area: 'Environment', icon: Recycle, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about caring for the environment.',
    writingPrompt: 'Write about things you do (or could do) to help the environment, like recycling.',
    speakingPrompt: 'Speak for 45-60 seconds about environmental habits in your daily life.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-home-repairs', level: 'B1', title: 'Home Repairs & Problems', area: 'Home', icon: Hammer, color: 'bg-blue-50 text-blue-600',
    description: 'Describe a problem at home and how you solved it.',
    writingPrompt: 'Write about a problem you had at home (broken item, repair) and how you solved it.',
    speakingPrompt: 'Speak for 45 seconds describing a home problem and the solution.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-photography-hobby', level: 'B1', title: 'A Hobby You Enjoy', area: 'Hobbies', icon: Camera, color: 'bg-blue-50 text-blue-600',
    description: 'Describe a hobby in detail.',
    writingPrompt: 'Write in detail about a hobby you enjoy. How did you start? Why do you like it?',
    speakingPrompt: 'Speak for 45-60 seconds about a hobby, explaining how you got started and what you enjoy about it.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-fitness-sport', level: 'B1', title: 'Fitness & Sport', area: 'Health', icon: Dumbbell, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about exercise and sport.',
    writingPrompt: 'Write about a sport or exercise routine you do, or would like to start, and the benefits.',
    speakingPrompt: 'Speak for 45 seconds about a sport you play or enjoy watching.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-favorite-book', level: 'B1', title: 'A Book That Influenced You', area: 'Culture', icon: BookOpen, color: 'bg-blue-50 text-blue-600',
    description: 'Describe a book and why it mattered to you.',
    writingPrompt: 'Write about a book you read that influenced you. Briefly describe the story and what you learned.',
    speakingPrompt: 'Speak for 45-60 seconds about a book that influenced you.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-festival-celebration', level: 'B1', title: 'A Festival or Celebration', area: 'Culture', icon: PartyPopper, color: 'bg-blue-50 text-blue-600',
    description: 'Describe a festival from your culture.',
    writingPrompt: 'Write about a festival or celebration from your country. What happens? Why is it special?',
    speakingPrompt: 'Speak for 45-60 seconds describing a festival or celebration and its traditions.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-nature-trip', level: 'B1', title: 'A Trip to Nature', area: 'Travel', icon: TreePine, color: 'bg-blue-50 text-blue-600',
    description: 'Describe a trip to a natural place.',
    writingPrompt: 'Write about a trip to a natural place (mountain, forest, beach). What did you see and do?',
    speakingPrompt: 'Speak for 45 seconds describing a memorable trip to nature.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-savings-goal', level: 'B1', title: 'A Financial Goal', area: 'Finance', icon: Banknote, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about something you are saving for.',
    writingPrompt: 'Write about something you are saving money for and your plan to reach that goal.',
    speakingPrompt: 'Speak for 45 seconds about a financial goal and your plan to achieve it.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-online-learning', level: 'B1', title: 'Online Learning & Apps', area: 'Education', icon: Laptop, color: 'bg-blue-50 text-blue-600',
    description: 'Talk about learning something online.',
    writingPrompt: 'Write about a skill you learned (or want to learn) online, and which tools or apps helped you.',
    speakingPrompt: 'Speak for 45-60 seconds about your experience learning something using an app or website.',
    minWords: 50, targetSeconds: 45,
  },
  {
    id: 'b1-customer-service', level: 'B1', title: 'Customer Service Situations', area: 'Daily Life', icon: MessageCircle, color: 'bg-blue-50 text-blue-600',
    description: 'Describe solving a problem with a company.',
    writingPrompt: 'Write about a time you contacted customer service to solve a problem. What happened?',
    speakingPrompt: 'Speak for 45 seconds describing a customer service experience, good or bad.',
    minWords: 50, targetSeconds: 45,
  },

  // ───────────────────────── B2 — 20 topics ─────────────────────────
  {
    id: 'b2-opinions-debate', level: 'B2', title: 'Expressing Opinions', area: 'Discussion', icon: MessageCircle, color: 'bg-indigo-50 text-indigo-600',
    description: 'Defend and challenge opinions on a topic.',
    writingPrompt: 'Choose a current topic and write a short essay (80-120 words) giving and supporting your opinion.',
    speakingPrompt: 'Speak for 60-90 seconds giving your opinion on a topical issue, with reasons and examples.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-phone-video-calls', level: 'B2', title: 'Phone & Video Calls', area: 'Communication', icon: Phone, color: 'bg-indigo-50 text-indigo-600',
    description: 'Handle professional calls and meetings.',
    writingPrompt: 'Write about best practices for a professional phone or video call (opening, clarifying, closing).',
    speakingPrompt: 'Speak for 60 seconds as if opening a professional video call and stating its purpose.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-career-ambitions', level: 'B2', title: 'Career Ambitions', area: 'Work', icon: TrendingUp, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss your career goals and plans.',
    writingPrompt: 'Write about your career ambitions for the next five years and the steps you will take.',
    speakingPrompt: 'Speak for 60-90 seconds about your career goals and how you plan to reach them.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-globalization', level: 'B2', title: 'Globalization & Culture', area: 'Society', icon: Globe, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss the effects of globalization.',
    writingPrompt: 'Write about how globalization has affected your country, both positively and negatively.',
    speakingPrompt: 'Speak for 60-90 seconds discussing one effect of globalization on your culture or country.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-law-justice', level: 'B2', title: 'Law & Justice', area: 'Society', icon: Scale, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss a justice or fairness issue.',
    writingPrompt: 'Write about a law or rule you think should change, and explain why.',
    speakingPrompt: 'Speak for 60 seconds about a law you would change and why.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-environment-climate', level: 'B2', title: 'Climate Change Solutions', area: 'Environment', icon: Leaf, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss solutions to climate change.',
    writingPrompt: 'Write about one solution to climate change that you think is most effective and explain why.',
    speakingPrompt: 'Speak for 60-90 seconds proposing a solution to climate change and defending it.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-mental-health', level: 'B2', title: 'Mental Health & Wellbeing', area: 'Health', icon: Brain, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss stress, balance, and wellbeing.',
    writingPrompt: 'Write about how you manage stress or maintain mental wellbeing in a busy life.',
    speakingPrompt: 'Speak for 60 seconds about strategies for managing stress or staying mentally healthy.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-government-policy', level: 'B2', title: 'Government & Public Policy', area: 'Politics', icon: Landmark, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss a government policy issue.',
    writingPrompt: 'Write about a public policy (education, healthcare, transport) you think needs improvement.',
    speakingPrompt: 'Speak for 60-90 seconds discussing a public policy issue and your view on it.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-advertising-media', level: 'B2', title: 'Advertising & Media Influence', area: 'Media', icon: Megaphone, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss how advertising affects people.',
    writingPrompt: 'Write about how advertising or social media influences the choices people make.',
    speakingPrompt: 'Speak for 60 seconds discussing the influence of advertising or social media on consumers.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-negotiation-skills', level: 'B2', title: 'Negotiation & Persuasion', area: 'Work', icon: Handshake, color: 'bg-indigo-50 text-indigo-600',
    description: 'Practice persuading and negotiating.',
    writingPrompt: 'Write a short persuasive paragraph trying to convince someone of your point of view.',
    speakingPrompt: 'Speak for 60-90 seconds trying to persuade a listener of an idea or proposal.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-innovation-ideas', level: 'B2', title: 'Innovation & New Ideas', area: 'Technology', icon: Lightbulb, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss an innovative idea or invention.',
    writingPrompt: 'Write about an invention or innovation that you think has changed the world significantly.',
    speakingPrompt: 'Speak for 60 seconds describing an innovation and explaining its impact.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-work-life-balance', level: 'B2', title: 'Work-Life Balance', area: 'Work', icon: Users2, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss balancing work and personal life.',
    writingPrompt: 'Write about the challenges of balancing work and personal life, and possible solutions.',
    speakingPrompt: 'Speak for 60-90 seconds about achieving a healthy work-life balance.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-online-safety', level: 'B2', title: 'Online Safety & Privacy', area: 'Technology', icon: ShieldAlert, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss internet safety and privacy concerns.',
    writingPrompt: 'Write about the risks of sharing personal information online and how to stay safe.',
    speakingPrompt: 'Speak for 60 seconds about an online safety or privacy concern and how to address it.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-economy-trends', level: 'B2', title: 'Economic Trends', area: 'Economics', icon: LineChart, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss an economic trend or issue.',
    writingPrompt: 'Write about an economic trend (inflation, remote work, e-commerce) and its effect on people.',
    speakingPrompt: 'Speak for 60-90 seconds explaining an economic trend and how it affects daily life.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-startup-entrepreneurship', level: 'B2', title: 'Entrepreneurship & Startups', area: 'Business', icon: Rocket, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss starting a business.',
    writingPrompt: 'Write about a business idea you would like to start, and explain why it could succeed.',
    speakingPrompt: 'Speak for 60 seconds pitching a business idea as if to an investor.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-civic-participation', level: 'B2', title: 'Civic Participation & Voting', area: 'Politics', icon: Vote, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss the importance of civic participation.',
    writingPrompt: 'Write about why participating in elections or community decisions matters.',
    speakingPrompt: 'Speak for 60-90 seconds about the importance of civic participation or voting.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-art-creativity', level: 'B2', title: 'Art & Creative Expression', area: 'Culture', icon: Palette, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss the role of art in society.',
    writingPrompt: 'Write about why art and creativity matter in society, with an example you find inspiring.',
    speakingPrompt: 'Speak for 60 seconds about the value of art or creative expression in everyday life.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-science-ethics', level: 'B2', title: 'Science & Ethical Questions', area: 'Science', icon: Microscope, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss an ethical question raised by science.',
    writingPrompt: 'Write about an ethical question raised by modern science or technology (e.g. AI, genetics).',
    speakingPrompt: 'Speak for 60-90 seconds discussing an ethical question in science or technology.',
    minWords: 80, targetSeconds: 60,
  },
  {
    id: 'b2-social-media-relationships', level: 'B2', title: 'Social Media & Relationships', area: 'Society', icon: Network, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss how social media affects relationships.',
    writingPrompt: 'Write about how social media has changed the way people build and maintain relationships.',
    speakingPrompt: 'Speak for 60 seconds discussing the impact of social media on relationships.',
    minWords: 70, targetSeconds: 60,
  },
  {
    id: 'b2-education-reform', level: 'B2', title: 'Education System Reform', area: 'Education', icon: GraduationCap, color: 'bg-indigo-50 text-indigo-600',
    description: 'Discuss how education could be improved.',
    writingPrompt: 'Write about one change you would make to the education system and why it would help students.',
    speakingPrompt: 'Speak for 60-90 seconds proposing a reform to the education system.',
    minWords: 80, targetSeconds: 60,
  },

  // ───────────────────────── C1 — 10 topics ─────────────────────────
  {
    id: 'c1-academic-discussion', level: 'C1', title: 'Academic Discussion', area: 'Academia', icon: Library, color: 'bg-purple-50 text-purple-600',
    description: 'Engage in scholarly discourse and analysis.',
    writingPrompt: 'Write a short academic-style argument (120-180 words) on a research or education topic, citing reasoning.',
    speakingPrompt: 'Speak for 90-120 seconds presenting an argument as if in a university seminar, with supporting reasoning.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-scientific-research', level: 'C1', title: 'Scientific Research & Discovery', area: 'Science', icon: FlaskConical, color: 'bg-purple-50 text-purple-600',
    description: 'Discuss a scientific discovery and its implications.',
    writingPrompt: 'Write about a scientific discovery or field of research and discuss its broader implications.',
    speakingPrompt: 'Speak for 90 seconds explaining a scientific discovery and its significance to a general audience.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-history-society', level: 'C1', title: 'History & Its Lessons', area: 'History', icon: Scroll, color: 'bg-purple-50 text-purple-600',
    description: 'Reflect on historical events and their relevance today.',
    writingPrompt: 'Write about a historical event and discuss what lessons it offers for the present day.',
    speakingPrompt: 'Speak for 90-120 seconds discussing a historical event and its relevance to modern society.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-law-human-rights', level: 'C1', title: 'Law & Human Rights', area: 'Law', icon: Gavel, color: 'bg-purple-50 text-purple-600',
    description: 'Discuss a complex legal or human rights issue.',
    writingPrompt: 'Write a balanced discussion of a human rights or legal issue, presenting multiple perspectives.',
    speakingPrompt: 'Speak for 90 seconds presenting a balanced view of a legal or human rights issue.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-philosophy-ethics', level: 'C1', title: 'Philosophy & Ethics', area: 'Philosophy', icon: InfinityIcon, color: 'bg-purple-50 text-purple-600',
    description: 'Explore a philosophical or ethical dilemma.',
    writingPrompt: 'Write about a philosophical or ethical dilemma and argue for a particular position.',
    speakingPrompt: 'Speak for 90-120 seconds exploring a philosophical question and arguing your position.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-global-economy', level: 'C1', title: 'The Global Economy', area: 'Economics', icon: Globe, color: 'bg-purple-50 text-purple-600',
    description: 'Analyze a global economic issue with nuance.',
    writingPrompt: 'Write an analytical paragraph on a global economic issue, considering multiple stakeholders.',
    speakingPrompt: 'Speak for 90 seconds analyzing a global economic issue, weighing different perspectives.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-literature-criticism', level: 'C1', title: 'Literature & Critical Analysis', area: 'Literature', icon: Sparkles, color: 'bg-purple-50 text-purple-600',
    description: 'Critically analyze a work of literature or film.',
    writingPrompt: 'Write a critical analysis of a book, poem, or film, discussing its themes and techniques.',
    speakingPrompt: 'Speak for 90-120 seconds critically analyzing a literary or cinematic work you know well.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-future-technology', level: 'C1', title: 'The Future of Technology', area: 'Technology', icon: Telescope, color: 'bg-purple-50 text-purple-600',
    description: 'Speculate on future technological developments.',
    writingPrompt: 'Write a forward-looking discussion of how a technology (AI, biotech, etc.) may transform society.',
    speakingPrompt: 'Speak for 90 seconds speculating on the future impact of a specific technology.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-cultural-identity', level: 'C1', title: 'Cultural Identity & Globalization', area: 'Culture', icon: Layers, color: 'bg-purple-50 text-purple-600',
    description: 'Discuss the tension between local identity and global culture.',
    writingPrompt: 'Write about the tension between preserving cultural identity and embracing global influences.',
    speakingPrompt: 'Speak for 90-120 seconds discussing how globalization affects cultural identity.',
    minWords: 120, targetSeconds: 90,
  },
  {
    id: 'c1-leadership-society', level: 'C1', title: 'Leadership & Social Change', area: 'Society', icon: Compass, color: 'bg-purple-50 text-purple-600',
    description: 'Discuss qualities of effective leadership and social change.',
    writingPrompt: 'Write about what qualities make an effective leader capable of driving meaningful social change.',
    speakingPrompt: 'Speak for 90 seconds discussing leadership qualities needed to address a major social issue.',
    minWords: 120, targetSeconds: 90,
  },
];

// Sanity-check counts at module load (dev-time only safeguard, no-op in production)
export const TOPIC_COUNTS: Record<CEFRLevel, number> = SPEAKING_TOPICS.reduce((acc, t) => {
  acc[t.level] = (acc[t.level] || 0) + 1;
  return acc;
}, {} as Record<CEFRLevel, number>);
