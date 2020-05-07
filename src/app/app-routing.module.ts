import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  },
  {
    path: 'editcategory/:id',
    loadChildren: () => import('./editcategory/editcategory.module').then( m => m.EditcategoryPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'editnote/:id',
    loadChildren: () => import('./editnote/editnote.module').then( m => m.EditnotePageModule)
  },
  {
    path: 'noteinfo/:id',
    loadChildren: () => import('./noteinfo/noteinfo.module').then( m => m.NoteinfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
