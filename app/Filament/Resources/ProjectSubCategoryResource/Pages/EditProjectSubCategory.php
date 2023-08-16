<?php

namespace App\Filament\Resources\ProjectSubCategoryResource\Pages;

use App\Filament\Resources\ProjectSubCategoryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjectSubCategory extends EditRecord
{
    protected static string $resource = ProjectSubCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
