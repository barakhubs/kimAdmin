<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\ProjectSubCategory;
use Filament\Forms;
use Filament\Forms\Components\MorphToSelect;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Builder;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Str;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-bookmark-square';

    protected static ?string $navigationGroup = 'Projects & Portfolio';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        $options = [];

        $categories = Category::with('subcategories')->where('type', 'project')->whereNull('category_id')->get();

        foreach ($categories as $category) {
            $subOptions = [];
            foreach ($category->subcategories as $subCategory) {
                $subOptions[$subCategory->id] = $subCategory->title;
            }

            $options[$category->title] = $subOptions;
        }

        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(
                        fn(string $operation, $state, Forms\Set $set) =>
                        in_array($operation, ['create', 'edit']) ? $set('slug', Str::slug($state)) : null
                    ),

                Forms\Components\TextInput::make('slug')
                    ->disabled()
                    ->dehydrated()
                    ->required()
                    ->unique(
                        Project::class,
                        'slug',
                        ignoreRecord: true
                    ),

                Select::make('category_id')
                    ->searchable()
                    ->label('Select project category')
                    ->options($options)
                    ->preload(),
                FileUpload::make('featured_image')
                    ->label('Featured Image')
                    ->image()
                    ->required()
                    ->preserveFilenames(),

                Builder::make('description')
                    ->blocks([
                        Builder\Block::make('client')
                            ->schema([
                                TextInput::make('name')
                                    ->label('Client Name')
                                    ->required(),
                                FileUpload::make('logo')
                                    ->label('Client Logo')
                                    ->image()
                                    ->preserveFilenames(),
                                Textarea::make('overview')
                                    ->label('Client Overview')
                                    ->required()
                                    ->columnSpanFull(),
                            ])
                            ->columns(2),

                        Builder\Block::make('challenges')
                            ->schema([
                                Textarea::make('challenge')
                                    ->label('Challenge description')
                                    ->required()
                                    ->columnSpanFull(),
                            ]),

                        Builder\Block::make('approaches')
                            ->schema([
                                Textarea::make('approach')
                                    ->label('Approach')
                                    ->rows(4)
                                    ->columnSpanFull()
                                    ->required(),
                                FileUpload::make('concept_one')
                                    ->label('Concept one')
                                    ->image()
                                    ->preserveFilenames(),
                                FileUpload::make('concept_two')
                                    ->label('Concept two')
                                    ->image()
                                    ->preserveFilenames(),
                                FileUpload::make('concept_three')
                                    ->label('Concept three')
                                    ->image()
                                    ->preserveFilenames(),
                            ])
                            ->label('Approaches')
                            ->columns(3),

                        Builder\Block::make('results')
                            ->schema([
                                Textarea::make('description')
                                    ->label('Result description'),
                                FileUpload::make('images')
                                    ->label('Images')
                                    ->image()
                                    ->preserveFilenames()
                                    ->multiple()
                            ])
                            ->label('Final results'),

                        Builder\Block::make('testimonial')
                            ->schema([
                                Textarea::make('testimonial')
                                    ->label('Client Feedback')
                                    ->required(),
                            ])
                            ->label('Testimonial'),

                        Builder\Block::make('images')
                            ->schema([
                                FileUpload::make('images')
                                    ->label('Images')
                                    ->image()
                                    ->preserveFilenames()
                                    ->multiple()
                            ])
                            ->label('Project Images'),

                        Builder\Block::make('video_url')
                            ->schema([
                                TextInput::make('video')
                                    ->label('Add video url')
                                    ->url()
                            ])
                            ->label('Project Video'),
                    ])
                    ->columnSpanFull()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('category.title')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('business')->label('Business/Client')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('featured_image'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
