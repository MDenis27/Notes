import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
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
  },
  {
    path: 'createnote',
    loadChildren: () => import('./createnote/createnote.module').then( m => m.CreatenotePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
