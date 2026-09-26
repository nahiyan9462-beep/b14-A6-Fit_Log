'use client'

import React from 'react';
import { ILibrary } from '@/data-types/library.type';
import { Clock3, Dumbbell, Flame } from 'lucide-react';

interface WorkoutStatsProps {
  workout: ILibrary[];
}

const ACCENT = '#dfff00';

const WorkoutStats = ({ workout }: WorkoutStatsProps) => {
  const totalExercises = workout.length;
  const totalMinutes = workout.reduce((sum, item) => sum + (item.duration ?? 0), 0);
  const totalCalories = workout.reduce((sum, item) => sum + (item.caloriesBurned ?? 0), 0);

  const stats = [
    {
      label: 'Exercises',
      value: totalExercises,
      icon: Dumbbell,
    },
    {
      label: 'Minutes',
      value: totalMinutes,
      icon: Clock3,
    },
    {
      label: 'Calories',
      value: totalCalories,
      icon: Flame,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-3xl border border-white/10 bg-[#111c23]/60 p-4 shadow-lg backdrop-blur-sm sm:gap-6 sm:p-6 transition-all duration-500
        hover:-translate-y-1
        hover:border-[#dfff00]/40
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        const isLast = i === stats.length - 1;

        return (
          <div
            key={stat.label}
            className={`flex ${!isLast ? 'border-r border-white/10 pr-2 sm:pr-6' : ''}`}
          >
            <div
              className="flex w-full items-center gap-2 border-b-2 border-transparent p-2 pb-3 transition-colors duration-300 sm:gap-4 sm:p-3 sm:pb-4"
            >
              <span
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:flex"
                style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
              >
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </span>

              <div className="flex min-w-0 flex-col">
                <span
                  className="truncate text-xl font-extrabold tracking-tight sm:text-3xl"
                  style={{ color: i === 0 ? ACCENT : '#ffffff' }}
                >
                  {stat.value}
                </span>

                <span className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutStats;