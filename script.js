/**
 * Author: Bilal Saad
 * GitHub: bilalsaad87
 * License: https://creativecommons.org/licenses/by/3.0/
 * Date: 08-28-2023
 * Language: English
 */

const textElement = document.getElementById('text');
        const words = [
            // Motivations   
            'Believe you can and you\'re halfway there',
            'The only way to do great work is to love what you do.',
            'Don\'t watch the clock; do what it does. Keep going.',
            'The future depends on what you do today.',
            'You are never too old to set another goal or to dream a new dream.',
            'Difficulties in life are intended to make us better, not bitter.',
            // Encouraging Reminders
            'You\'ve overcome challenges before, and you can overcome them again.',
            'Believe in yourself – you are stronger than you think.',
            'Every step forward is a step closer to your goals.',
            'You have the power to turn setbacks into comebacks.',
            'Embrace progress, not perfection.',
            'In the midst of difficulty lies opportunity.',
            // Affirmations
            'I am worthy of love, happiness, and success.',
            'I believe in my abilities and trust my intuition.',
            'Every day, in every way, I am getting better and better.',
            'I am resilient, and I can handle any challenge that comes my way.',
            'I am grateful for all the blessings in my life.',
            'I am in control of my thoughts and emotions.',
            // Team Collaboration Emphasis
            'Alone we can do so little; together we can do so much.',
            'Coming together is a beginning, staying together is progress, and working together is success.',
            'Collaboration allows us to know more than we are capable of knowing by ourselves.',
            'No one can whistle a symphony. It takes a whole orchestra to play it.',
            'Individually, we are one drop. Together, we are an ocean.',
            'Teamwork makes the dream work.',
            // Wellness and Self-Care
            'Self-care is not selfish. You cannot serve from an empty vessel.',
            'Take care of your body. It\'s the only place you have to live.',
            'You yourself, as much as anybody in the entire universe, deserve your love and affection.',
            'Taking care of yourself doesn\'t mean me first, it means me too.',
            'Self-care is how you take your power back.',
            'Your body is precious. It is our vehicle for awakening. Treat it with care.',
            // Goal Setting and Growth
            'Set goals that make you want to jump out of bed in the morning.',
            'A goal without a plan is just a wish.',
            'The only way to do great work is to love what you do.',
            'You are never too old to set another goal or to dream a new dream.',
            'Goals transform a random walk into a chase.',
            'Setting goals is the first step in turning the invisible into the visible.',
            // Inspirational Stories
            'The only way to achieve the impossible is to believe it is possible.',
            'The greatest glory in living lies not in never falling, but in rising every time we fall.',
            'The only thing we have to fear is fear itself.',
            'It does not do to dwell on dreams and forget to live.',
            'Success is not final, failure is not fatal: It is the courage to continue that counts.',
            'The journey of a thousand miles begins with one step.',
            // Acts of Kindness and Gratitude
            'No act of kindness, no matter how small, is ever wasted.',
            'Kindness is a language which the deaf can hear and the blind can see.',
            'You cannot do a kindness too soon, for you never know how soon it will be too late.',
            'One kind word can change someone\'s entire day.',
            'Kindness is the sunshine in which virtue grows.',
            'Gratitude turns what we have into enough.',
            // Visuals of Nature and Tranquility
            'In every walk with nature, one receives far more than he seeks.',
            'Adopt the pace of nature: her secret is patience.',
            'The silence of nature is very real. It surrounds you, you can feel it.',
            'The poetry of earth is never dead.',
            'Nature does not hurry, yet everything is accomplished.'
        ];
        let wordIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < words[wordIndex].length) {
                textElement.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 5000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 100);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 1000);
        });