<?php

namespace App\Filament\Resources\ProjectSubCategoryResource\Pages;

use App\Filament\Resources\ProjectSubCategoryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProjectSubCategories extends ListRecords
{
    protected static string $resource = ProjectSubCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
