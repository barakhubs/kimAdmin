<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use App\Models\Project;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $total_posts = Post::get()->count();
        $total_projects = Project::get()->count();
        return [
            Stat::make('Total Posts', $total_posts),
            Stat::make('Total Projects', $total_projects),
            Stat::make('Average time on page', '3:12'),
        ];
    }
}
